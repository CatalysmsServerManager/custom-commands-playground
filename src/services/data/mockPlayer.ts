import faker from 'faker';

const roleFields = ['manageServer', 'manageEconomy', 'managePlayers', 'manageTickets', 'viewAnalytics', 'viewDashboard', 'useTracking', 'useChat', 'useCommands', 'manageGbl', 'discordExec', 'discordLookup'];

function mockPlayer() {
  const roleFieldsWithPerm: Record<string, boolean> = {};

  for (const field of roleFields) {
    roleFieldsWithPerm[field] = faker.datatype.boolean();
  }

  return {
    'createdAt': 1552652314408,
    'updatedAt': 1552753112921,
    'id': 1,
    'steamId': '76561198028198341',
    'entityId': faker.datatype.number(),
    'ip': faker.internet.ip(),
    'country': faker.address.countryCode(),
    'currency': faker.datatype.number(),
    'avatarUrl': faker.internet.avatar(),
    'name': faker.internet.userName(),
    'positionX': faker.datatype.number(),
    'positionY': faker.datatype.number(),
    'positionZ': faker.datatype.number(),
    'inventory': {
      'steamid': '76561198028175941',
      'entityid': 171,
      'bag': [
        {
          'count': 1,
          'name': 'foolsCapAdmin',
          'icon': 'apparelSkullCap',
          'iconcolor': 'D200D2',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'drugPainkillers',
          'icon': 'drugPainkillers',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'drugPainkillers',
          'icon': 'drugPainkillers',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 5,
          'name': 'drinkYuccaJuiceSmoothie',
          'icon': 'drinkYuccaJuiceSmoothie',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'drinkYuccaJuiceSmoothie',
          'icon': 'drinkYuccaJuiceSmoothie',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'drinkYuccaJuiceSmoothie',
          'icon': 'drinkYuccaJuiceSmoothie',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'drinkYuccaJuiceSmoothie',
          'icon': 'drinkYuccaJuiceSmoothie',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'drinkYuccaJuiceSmoothie',
          'icon': 'drinkYuccaJuiceSmoothie',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 5,
          'name': 'drinkJarEmpty',
          'icon': 'drinkJarEmpty',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'foodSteakAndPotato',
          'icon': 'foodSteakAndPotato',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 8,
          'name': 'foodSteakAndPotato',
          'icon': 'foodSteakAndPotato',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        {
          'count': 1,
          'name': 'rocketBootsAdmin',
          'icon': 'apparelGothBoots',
          'iconcolor': 'D200D2',
          'quality': -1
        },
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null,
        null
      ],
      'belt': [
        {
          'count': 1,
          'name': 'gunHandgunPistolAdmin',
          'icon': 'gunHandgunT1Pistol',
          'iconcolor': 'D200D2',
          'quality': -1
        },
        {
          'count': 1,
          'name': 'gunToolDiggerAdmin',
          'icon': 'gunHandgunT3SMG5',
          'iconcolor': 'D200D2',
          'quality': -1
        },
        {
          'count': 10,
          'name': 'drugVitamins',
          'icon': 'drugVitamins',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 9,
          'name': 'drugAntibiotics',
          'icon': 'drugAntibiotics',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 4,
          'name': 'medicalSplint',
          'icon': 'medicalSplint',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        {
          'count': 9,
          'name': 'drugPainkillers',
          'icon': 'drugPainkillers',
          'iconcolor': 'FFFFFF',
          'quality': -1
        },
        null,
        null,
        null,
        null
      ],
      'equipment': {
        'head': {
          'count': 1,
          'name': 'pimpMiningHelmetAdmin',
          'icon': 'armorMiningHelmet',
          'iconcolor': 'D200D2',
          'quality': -1
        },
        'eyes': {
          'count': 1,
          'name': 'coolLootShadesAdmin200',
          'icon': 'apparelShades',
          'iconcolor': 'D200D2',
          'quality': -1
        },
        'face': null,
        'armor': {
          'count': 1,
          'name': 'armorPlotAdmin',
          'icon': 'armorSteelChest',
          'iconcolor': 'FF96FF',
          'quality': -1
        },
        'jacket': null,
        'shirt': {
          'count': 1,
          'name': 'toughGuyShirtAdmin',
          'icon': 'apparelTankTop',
          'iconcolor': 'D200D2',
          'quality': -1
        },
        'legarmor': null,
        'pants': null,
        'boots': null,
        'gloves': {
          'count': 1,
          'name': 'ringOfFireAdmin',
          'icon': 'modGunBowPolymerString',
          'iconcolor': 'D200D2',
          'quality': -1
        }
      }
    },
    'playtime': faker.datatype.number(),
    'lastOnline': faker.date.past(),
    'banned': faker.datatype.boolean(),
    'deaths': faker.datatype.number(),
    'zombieKills': faker.datatype.number(),
    'playerKills': faker.datatype.number(),
    'score': faker.datatype.number(),
    'level': faker.datatype.number({ max: 200 }),
    'lastTeleportTime': faker.date.past(),
    'server': 1,
    'user': 1,
    'role': {
      name: faker.name.jobTitle(),
      level: faker.datatype.number({ max: 2000, min: 0 }),
      amountOfTeleports: faker.datatype.number({ max: 50, min: 0 }),
      ...roleFieldsWithPerm
    }
  };
}

export default mockPlayer;
