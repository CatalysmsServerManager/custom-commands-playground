import Handlebars from 'handlebars'

Handlebars.registerHelper('eq', function (a, b) {
    return (a === b);
});
Handlebars.registerHelper('gt', function (a, b) {
    return (a > b);
});
Handlebars.registerHelper('gte', function (a, b) {
    return (a >= b);
});
Handlebars.registerHelper('lt', function (a, b) {
    return (a < b);
});
Handlebars.registerHelper('lte', function (a, b) {
    return (a <= b);
});
Handlebars.registerHelper('ne', function (a, b) {
    return (a !== b);
});

export default function parseTemplate(template, data) {
    const compiled = Handlebars.compile(template)
    console.log(data);
    return compiled(data)
}