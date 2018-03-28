import { Data } from './data.interface';

export let single = [
  {
    'name': 'Meterkast',
    'value': 0.050
  }
];

// Meterkast data tabel
export let tableData: Data[] = [
      {
        'name': '09:00',
        'value': 0.050
      },
      {
        'name': '10:00',
        'value': 0.100
      },
      {
        'name': '11:00',
        'value': 0.233
      },
      {
        'name': '12:00',
        'value': 0.323
      },
      {
        'name': '13:00',
        'value': 0.543
      },
      {
        'name': '14:00',
        'value': 0.776
    }];

// Meterkast data gesimuleert grafiek 1
export let standdata = [
  {
    'name': 'Meterkast',
    'series': [
      {
        'name': '09:00',
        'value': 0.050
      },
      {
        'name': '10:00',
        'value': 0.100
      },
      {
        'name': '11:00',
        'value': 0.233
      },
      {
        'name': '12:00',
        'value': 0.323
      },
      {
        'name': '13:00',
        'value': 0.543
      },
      {
        'name': '14:00',
        'value': 0.776
      }
    ]
  },
];

// Meterkast data gesimuleert grafiek 2
export let datausage = [
  {
    'name': 'Meterkast',
    'series': [
      {
        'name': '09:00',
        'value': 0.050
      },
      {
        'name': '10:00',
        'value': 0.050
      },
      {
        'name': '11:00',
        'value': 0.133
      },
      {
        'name': '12:00',
        'value': 0.090
      },
      {
        'name': '13:00',
        'value': 0.220
      },
      {
        'name': '14:00',
        'value': 0.233
      }
    ]
  },
];
