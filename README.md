# train-location-and-visitors-server

\[English | [日本語](README.ja.md)\]

API server for the [train-location-and-visitors](https://github.com/acrylic-style/train-location-and-visitors-server).

## What does this do?

- Fetch data from upstream ([ODPT](https://www.odpt.org), "Public Transportation Open Data Center"), format them and send to the client.
- Supports the following data types:
  - `odpt:TrainTimetable` (Timetable of the train)
  - `odpt:Train` (Real-time data of train location, including delay time)
  - `odpt:Station` (Station data)
- Support for the following data types will be (probably) done in the future:
  - GTFS/GTFS-JP
  - GTFS-RT
- Fetch visitor schedule (event) data from [Garoon](https://garoon.cybozu.co.jp/) (which is an SaaS for schedule management)

## Data examples

### Timetable

`http://localhost:3000/timetable?railway=Toei.Asakusa`
```json
[
  {
    "railway": "Toei.Asakusa",
    "railwayName": "都営浅草線",
    "calendar": "Weekday",
    "operator": "Toei",
    "operatorName": "東京都交通局",
    "trainType": "Toei.Local",
    "trainTypeName": "普通",
    "trainNumber": "577H",
    "originStation": [
      {
        "id": "Toei.Asakusa.NishiMagome",
        "latitude": 35.58705,
        "longitude": 139.706086,
        "name": "西馬込",
        "railway": "Toei.Asakusa",
        "railwayName": "都営浅草線",
        "operator": "Toei",
        "operatorName": "東京都交通局",
        "code": "A-01",
        "localized_title": {
          "en": "Nishi-magome",
          "ja": "西馬込"
        }
      }
    ],
    "destinationStation": [
      {
        "id": "Toei.Asakusa.Sengakuji",
        "latitude": 35.638715,
        "longitude": 139.739993,
        "name": "泉岳寺",
        "railway": "Toei.Asakusa",
        "railwayName": "都営浅草線",
        "operator": "Toei",
        "operatorName": "東京都交通局",
        "code": "A-07",
        "localized_title": {
          "en": "Sengakuji",
          "ja": "泉岳寺"
        },
        "connectingRailway": [
          {
            "railway": "JR-East.KeihinTohokuNegishi",
            "railwayName": "JR京浜東北線・根岸線"
          },
          {
            "railway": "JR-East.Yamanote",
            "railwayName": "JR山手線"
          },
          {
            "railway": "Keikyu.Main",
            "railwayName": "京急本線"
          }
        ],
        "connectingStation": [
          {
            "id": "JR-East.KeihinTohokuNegishi.TakanawaGateway",
            "railway": "JR-East.KeihinTohokuNegishi",
            "railwayName": "JR京浜東北線・根岸線",
            "operator": "JR-East",
            "operatorName": "東日本旅客鉄道株式会社",
            "name": "TakanawaGateway"
          },
          {
            "id": "JR-East.Yamanote.TakanawaGateway",
            "railway": "JR-East.Yamanote",
            "railwayName": "JR山手線",
            "operator": "JR-East",
            "operatorName": "東日本旅客鉄道株式会社",
            "name": "TakanawaGateway"
          },
          {
            "id": "Keikyu.Main.Sengakuji",
            "railway": "Keikyu.Main",
            "railwayName": "京急本線",
            "operator": "Keikyu",
            "operatorName": "京浜急行電鉄",
            "name": "Sengakuji"
          }
        ]
      }
    ],
    "direction": "Northbound",
    "timetable": [
      {
        "departureTime": "05:35",
        "departureStation": {
          "id": "Toei.Asakusa.NishiMagome",
          "latitude": 35.58705,
          "longitude": 139.706086,
          "name": "西馬込",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-01",
          "localized_title": {
            "en": "Nishi-magome",
            "ja": "西馬込"
          }
        },
        "platformNumber": "1"
      },
      {
        "arrivalTime": "05:37",
        "departureTime": "05:37",
        "arrivalStation": {
          "id": "Toei.Asakusa.Magome",
          "latitude": 35.596773,
          "longitude": 139.711884,
          "name": "馬込",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-02",
          "localized_title": {
            "en": "Magome",
            "ja": "馬込"
          }
        },
        "departureStation": {
          "id": "Toei.Asakusa.Magome",
          "latitude": 35.596773,
          "longitude": 139.711884,
          "name": "馬込",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-02",
          "localized_title": {
            "en": "Magome",
            "ja": "馬込"
          }
        }
      },
      {
        "arrivalTime": "05:39",
        "departureTime": "05:39",
        "arrivalStation": {
          "id": "Toei.Asakusa.Nakanobu",
          "latitude": 35.605274,
          "longitude": 139.713645,
          "name": "中延",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-03",
          "localized_title": {
            "en": "Nakanobu",
            "ja": "中延"
          }
        },
        "departureStation": {
          "id": "Toei.Asakusa.Nakanobu",
          "latitude": 35.605274,
          "longitude": 139.713645,
          "name": "中延",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-03",
          "localized_title": {
            "en": "Nakanobu",
            "ja": "中延"
          }
        }
      },
      {
        "arrivalTime": "05:41",
        "departureTime": "05:41",
        "arrivalStation": {
          "id": "Toei.Asakusa.Togoshi",
          "latitude": 35.614421,
          "longitude": 139.716315,
          "name": "戸越",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-04",
          "localized_title": {
            "en": "Togoshi",
            "ja": "戸越"
          }
        },
        "departureStation": {
          "id": "Toei.Asakusa.Togoshi",
          "latitude": 35.614421,
          "longitude": 139.716315,
          "name": "戸越",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-04",
          "localized_title": {
            "en": "Togoshi",
            "ja": "戸越"
          }
        }
      },
      {
        "arrivalTime": "05:43",
        "departureTime": "05:44",
        "arrivalStation": {
          "id": "Toei.Asakusa.Gotanda",
          "latitude": 35.626878,
          "longitude": 139.723965,
          "name": "五反田",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-05",
          "localized_title": {
            "en": "Gotanda",
            "ja": "五反田"
          }
        },
        "departureStation": {
          "id": "Toei.Asakusa.Gotanda",
          "latitude": 35.626878,
          "longitude": 139.723965,
          "name": "五反田",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-05",
          "localized_title": {
            "en": "Gotanda",
            "ja": "五反田"
          }
        }
      },
      {
        "arrivalTime": "05:45",
        "departureTime": "05:45",
        "arrivalStation": {
          "id": "Toei.Asakusa.Takanawadai",
          "latitude": 35.631751,
          "longitude": 139.730384,
          "name": "高輪台",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-06",
          "localized_title": {
            "en": "Takanawadai",
            "ja": "高輪台"
          }
        },
        "departureStation": {
          "id": "Toei.Asakusa.Takanawadai",
          "latitude": 35.631751,
          "longitude": 139.730384,
          "name": "高輪台",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-06",
          "localized_title": {
            "en": "Takanawadai",
            "ja": "高輪台"
          }
        }
      },
      {
        "arrivalTime": "05:48",
        "arrivalStation": {
          "id": "Toei.Asakusa.Sengakuji",
          "latitude": 35.638715,
          "longitude": 139.739993,
          "name": "泉岳寺",
          "railway": "Toei.Asakusa",
          "railwayName": "都営浅草線",
          "operator": "Toei",
          "operatorName": "東京都交通局",
          "code": "A-07",
          "localized_title": {
            "en": "Sengakuji",
            "ja": "泉岳寺"
          }
        },
        "platformNumber": "3"
      }
    ]
  }
]
```

### Station

`http://localhost:3000/station?railway=Toei.Asakusa`
```json
[
  {
    "id": "Toei.Asakusa.HonjoAzumabashi",
    "latitude": 35.708565,
    "longitude": 139.804397,
    "name": "本所吾妻橋",
    "railway": "Toei.Asakusa",
    "railwayName": "都営浅草線",
    "operator": "Toei",
    "operatorName": "東京都交通局",
    "code": "A-19",
    "localized_title": {
      "en": "Honjo-azumabashi",
      "ja": "本所吾妻橋"
    }
  }
]
```

### Train Location

`http://localhost:3000/train_location?railway=Toei.Asakusa`
```json
[
  {
    "delay": 0,
    "railway": "Toei.Asakusa",
    "railwayName": "都営浅草線",
    "operator": "Toei",
    "operatorName": "東京都交通局",
    "direction": "Northbound",
    "trainNumber": "2237Ta",
    "trainType": "Toei.Local",
    "trainTypeName": "普通",
    "trainOwner": "Toei",
    "trainOwnerName": "東京都交通局",
    "fromStation": {
      "id": "Toei.Asakusa.NishiMagome",
      "latitude": 35.58705,
      "longitude": 139.706086,
      "name": "西馬込",
      "railway": "odpt.Railway:Toei.Asakusa",
      "railwayName": "都営浅草線",
      "operator": "odpt.Operator:Toei",
      "operatorName": "東京都交通局",
      "code": "A-01",
      "localized_title": {
        "en": "Nishi-magome",
        "ja": "西馬込"
      }
    },
    "toStation": null,
    "originStation": [
      {
        "id": "Toei.Asakusa.NishiMagome",
        "latitude": 35.58705,
        "longitude": 139.706086,
        "name": "西馬込",
        "railway": "Toei.Asakusa",
        "railwayName": "都営浅草線",
        "operator": "Toei",
        "operatorName": "東京都交通局",
        "code": "A-01",
        "localized_title": {
          "en": "Nishi-magome",
          "ja": "西馬込"
        }
      }
    ],
    "destinationStation": [
      {
        "id": "Toei.Asakusa.Sengakuji",
        "latitude": 35.638715,
        "longitude": 139.739993,
        "name": "泉岳寺",
        "railway": "Toei.Asakusa",
        "railwayName": "都営浅草線",
        "operator": "Toei",
        "operatorName": "東京都交通局",
        "code": "A-07",
        "localized_title": {
          "en": "Sengakuji",
          "ja": "泉岳寺"
        },
        "connectingRailway": [
          {
            "railway": "JR-East.KeihinTohokuNegishi",
            "railwayName": "JR京浜東北線・根岸線"
          },
          {
            "railway": "JR-East.Yamanote",
            "railwayName": "JR山手線"
          },
          {
            "railway": "Keikyu.Main",
            "railwayName": "京急本線"
          }
        ],
        "connectingStation": [
          {
            "id": "JR-East.KeihinTohokuNegishi.TakanawaGateway",
            "railway": "JR-East.KeihinTohokuNegishi",
            "railwayName": "JR京浜東北線・根岸線",
            "operator": "JR-East",
            "operatorName": "東日本旅客鉄道株式会社",
            "name": "TakanawaGateway"
          },
          {
            "id": "JR-East.Yamanote.TakanawaGateway",
            "railway": "JR-East.Yamanote",
            "railwayName": "JR山手線",
            "operator": "JR-East",
            "operatorName": "東日本旅客鉄道株式会社",
            "name": "TakanawaGateway"
          },
          {
            "id": "Keikyu.Main.Sengakuji",
            "railway": "Keikyu.Main",
            "railwayName": "京急本線",
            "operator": "Keikyu",
            "operatorName": "京浜急行電鉄",
            "name": "Sengakuji"
          }
        ]
      }
    ]
  }
]
```

### Static & cached data

Returns the contents of [staticData.ts](src/staticData.ts)

`http://localhost:3000/data`
```json
{
  "railway": {
    "Toei.Asakusa": "都営浅草線",
    "Toei.Oedo": "都営大江戸線",
    "Toei.Shinjuku": "都営新宿線",
    "Toei.Mita": "都営三田線",
    "Keio.Keio": "京王線",
    "Keio.Sagamihara": "京王相模原線",
    "Keio.KeioNew": "京王新線",
    "Keisei.Main": "京成本線",
    "Keisei.Oshiage": "京成押上線",
    "Keisei.NaritaSkyAccess": "京成成田スカイアクセス線",
    "Hokuso.Hokuso": "北総線",
    "Keikyu.Main": "京急本線",
    "Keikyu.Airport": "京急空港線",
    "Keikyu.Kurihama": "京急久里浜線",
    "Tobu.TobuSkytree": "東武スカイツリーライン",
    "Tobu.TobuSkytreeBranch": "東武スカイツリーライン（押上支線）",
    "TokyoMetro.Ginza": "東京メトロ銀座線",
    "TokyoMetro.Tozai": "東京メトロ東西線",
    "TokyoMetro.Hibiya": "東京メトロ日比谷線",
    "TokyoMetro.Hanzomon": "東京メトロ半蔵門線",
    "JR-East.Yamanote": "JR山手線",
    "JR-East.KeihinTohokuNegishi": "JR京浜東北線・根岸線",
    "JR-East.SobuRapid": "JR総武快速線",
    "JR-East.JobanRapid": "JR常磐線快速電車",
    "JR-East.Tokaido": "JR東海道線",
    "JR-East.Yokosuka": "JR横須賀線",
    "JR-East.ChuoSobuLocal": "JR中央・総武線各駅停車",
    "Yurikamome.Yurikamome": "ゆりかもめ線",
    "TokyoMonorail.HanedaAirport": "東京モノレール羽田空港線",
    "Tokyu.Ikegami": "東急池上線"
  },
  "operator": {
    "Toei": "東京都交通局",
    "TokyoMetro": "東京メトロ",
    "Keio": "京王電鉄",
    "Keisei": "京成電鉄",
    "Hokuso": "北総鉄道",
    "Keikyu": "京浜急行電鉄",
    "JR-East": "東日本旅客鉄道株式会社",
    "Yurikamome": "ゆりかもめ",
    "TokyoMonorail": "東京モノレール",
    "Tokyu": "東急電鉄"
  },
  "trainType": {
    "Toei.Asakusa": {
      "Toei.Local": "普通",
      "Toei.Rapid": "快速",
      "Toei.Express": "急行",
      "Toei.LimitedExpress": "特急",
      "Toei.AccessExpress": "アクセス特急",
      "Toei.RapidLimitedExpress": "快速特急",
      "Toei.AirportRapidLimitedExpress": "エアポート快特"
    }
  },
  "station": {
    "Keikyu.Airport.HanedaAirportTerminal1and2": {
      "code": "KK-17",
      "name": "羽田空港第1・第2ターミナル"
    }
  },
  "station_order": {
    "Toei.Asakusa": [
      "A-01",
      "A-02",
      "A-03",
      "A-04",
      "A-05",
      "A-06",
      "A-07",
      "A-08",
      "A-09",
      "A-10",
      "A-11",
      "A-12",
      "A-13",
      "A-14",
      "A-15",
      "A-16",
      "A-17",
      "A-18",
      "A-19",
      "A-20"
    ]
  }
}
```
