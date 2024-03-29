import * as monaco from 'monaco-editor';
import { FC, useContext, useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

import { ExecuteButton, Output } from '../components';
import { Data } from '../components/Data';
import { editorOptions, setup } from '../components/Editor/settings';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { HTTP } from '../services/http';
import { OptionsContext } from '../services/optionsContext';
import { debounce } from '../services/util/debounce';

const PlaygroundContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
`;

const EditorContainer = styled.div`
  height: 100vh;
  width: 100%;
`;

const RightContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
`;

const formatOutput = (output: string[] | undefined, errors: string[]) => {
  const joinedOutput = Array.isArray(output) ? output.join('\n') : '';

  if (errors.length) {
    return `${joinedOutput}\n\n\n------------------\n\n\nERRORS\n\n\n${errors.join(
      '\n'
    )}`;
  }

  return joinedOutput;
};

const initialValue = `{{#if (gt player.role.level 10 )}} 
pm {{player.steamId}} "Hey {{player.name}} You have the correct role to execute this command";
{{else}} 
pm {{player.steamId}} "Sorry, {{player.name}}, you're not allowed to do that";
{{/if}}
`;

export const Playground: FC = () => {
  const options = useContext(OptionsContext);
  const [editorContent, setEditorContent] = useLocalStorage<string>('editor-content', initialValue);

  const [editor, setEditor] = useState<monaco.editor.IStandaloneCodeEditor>();
  const [output, setOutput] = useState('');
  const [data, setData] = useState({ data: {} });

  const ref = useRef<HTMLDivElement>(null);

  function storeEditorContent(editor: monaco.editor.IStandaloneCodeEditor) {
    const editorValue = editor.getModel()?.getValue();
    if (editorValue) {
      setEditorContent(editorValue);
    }
  }

  async function executeCommand() {
    try {
      const http = new HTTP(options);
      const template = editor?.getModel()?.getValue() ?? '';
      const r = await http.executeTemplate(template, data.data);
      const formatted = formatOutput(r.output, r.errors);
      setOutput(formatted);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  }

  useEffect(() => {
    if (ref.current) {
      const newEditor = monaco.editor.create(ref.current, editorOptions(editorContent));
      setEditor(newEditor);
      newEditor.onKeyUp(debounce(() => {
        storeEditorContent(newEditor);
      }, 1000));
      setup(); // setup editor default settings (language)
    }
    return () => {
      editor?.dispose();
    };
  }, []);

  return (
    <PlaygroundContainer>
      <ExecuteButton onClick={executeCommand} />
      <EditorContainer ref={ref} />
      <RightContainer>
        <Output output={output} />
        <Data data={data} setData={setData} />
      </RightContainer>
    </PlaygroundContainer>
  );
};
