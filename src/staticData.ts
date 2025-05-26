export const staticData: {
  railway: {[key: string]: string},
  operator: {[key: string]: string},
  trainType: {[railway: string]: {[type: string]: string}},
  station: {[key: string]: {code?: string, name: string}},
  station_order: {[key: string]: string[]},
  train_location_format: {[railway: string]: "JSON" | "GTFS-RT"},
} = {
  operator: {
    'Hokuso': '北総鉄道',
    'JR-East': 'JR東日本',
    'Keikyu': '京浜急行電鉄',
    'Keio': '京王電鉄',
    'Keisei': '京成電鉄',
    'Minatomirai': '横浜高速鉄道',
    'Odakyu': '小田急電鉄',
    'SaitamaRailway': '埼玉高速鉄道',
    'Seibu': '西武鉄道',
    'Shibayama': '柴山鉄道',
    'Sotetsu': '相模鉄道',
    'Toei': '東京都交通局',
    'TokyoMetro': '東京メトロ',
    'TokyoMonorail': '東京モノレール',
    'Tokyu': '東急電鉄',
    'ToyoRapid': '東葉高速鉄道',
    'Yurikamome': 'ゆりかもめ',
  },
  railway: {
    'Hokuso.Hokuso': '北総線',
    'JR-East.ChuoSobuLocal': 'JR中央・総武線各駅停車',
    'JR-East.JobanLocal': 'JR常磐線各駅停車',
    'JR-East.JobanRapid': 'JR常磐線快速電車',
    'JR-East.KeihinTohokuNegishi': 'JR京浜東北線・根岸線',
    'JR-East.SobuRapid': 'JR総武快速線',
    'JR-East.Tokaido': 'JR東海道線',
    'JR-East.Yamanote': 'JR山手線',
    'JR-East.Yokosuka': 'JR横須賀線',
    'Keikyu.Airport': '京急空港線',
    'Keikyu.Kurihama': '京急久里浜線',
    'Keikyu.Main': '京急本線',
    'Keio.Keio': '京王線',
    'Keio.KeioNew': '京王新線',
    'Keio.Sagamihara': '京王相模原線',
    'Keisei.Main': '京成本線',
    'Keisei.NaritaSkyAccess': '京成成田スカイアクセス線',
    'Keisei.Oshiage': '京成押上線',
    'Minatomirai.Minatomirai': 'みなとみらい線',
    'Odakyu.Odawara': '小田急小田原線',
    'Odakyu.Tama': '小田急多摩線',
    'SaitamaRailway.SaitamaRailway': '埼玉スタジアム線',
    'Seibu.Ikebukuro': '西武池袋線',
    'Shibayama.Shibayama': '柴山鉄道線',
    'Sotetsu.Izumino': '相鉄いずみ野線',
    'Sotetsu.Main': '相鉄本線',
    'Tobu.TobuSkytree': '東武スカイツリーライン',
    'Tobu.TobuSkytreeBranch': '東武スカイツリーライン（押上支線）',
    'Tobu.Tojo': '東武東上線',
    'Toei.Asakusa': '都営浅草線',
    'Toei.Mita': '都営三田線',
    'Toei.Oedo': '都営大江戸線',
    'Toei.Shinjuku': '都営新宿線',
    'TokyoMetro.Chiyoda': '東京メトロ千代田線',
    'TokyoMetro.Fukutoshin': '東京メトロ副都心線',
    'TokyoMetro.Ginza': '東京メトロ銀座線',
    'TokyoMetro.Hanzomon': '東京メトロ半蔵門線',
    'TokyoMetro.Hibiya': '東京メトロ日比谷線',
    'TokyoMetro.Marunouchi': '東京メトロ丸ノ内線',
    'TokyoMetro.MarunouchiBranch': '東京メトロ丸ノ内線（方南町支線）',
    'TokyoMetro.Namboku': '東京メトロ南北線',
    'TokyoMetro.Tozai': '東京メトロ東西線',
    'TokyoMetro.Yurakucho': '東京メトロ有楽町線',
    'TokyoMonorail.HanedaAirport': '東京モノレール羽田空港線',
    'Tokyu.Ikegami': '東急池上線',
    'Tokyu.Meguro': '東急目黒線',
    'Tokyu.TokyuShinYokohama': '東急新横浜線',
    'Tokyu.Toyoko': '東急東横線',
    'ToyoRapid.ToyoRapid': '東葉高速線',
    'Yurikamome.Yurikamome': 'ゆりかもめ線',
  },
  station: {
    'Hokuso.Hokuso.ImbaNihonIdai': {
      code: 'HS-14',
      name: '印旛日本医大',
    },
    'Hokuso.Hokuso.InzaiMakinohara': {
      code: 'HS-13',
      name: '印西牧の原',
    },
    'JR-East.ChuoSobuLocal.Mitaka': {
      code: 'JB-01',
      name: '三鷹',
    },
    'JR-East.ChuoSobuLocal.Tsudanuma': {
      code: 'JB-33',
      name: '津田沼',
    },
    'JR-East.JobanLocal.Abiko': {
      code: 'JL-30',
      name: '我孫子',
    },
    'JR-East.JobanLocal.Kashiwa': {
      code: 'JL-28',
      name: '柏',
    },
    'JR-East.JobanLocal.Toride': {
      code: 'JL-32',
      name: '取手',
    },
    'Keikyu.Airport.HanedaAirportTerminal1and2': {
      code: 'KK-17',
      name: '羽田空港第1・第2ターミナル',
    },
    'Keikyu.Kurihama.KeikyuKurihama': {
      code: 'KK-67',
      name: '京急久里浜',
    },
    'Keikyu.Kurihama.Misakiguchi': {
      code: 'KK-72',
      name: '三崎口',
    },
    'Keisei.Main.KeiseiNarita': {
      code: 'KS-40',
      name: '京成成田'
    },
    'Keisei.Main.KeiseiSakura': {
      code: 'KS-35',
      name: '京成佐倉'
    },
    'Keisei.Main.KeiseiTakasago': {
      code: 'KS-10',
      name: '京成高砂',
    },
    'Keisei.Main.NaritaAirportTerminal1': {
      code: 'KS-42',
      name: '成田空港（成田第1ターミナル）',
    },
    'Keisei.NaritaSkyAccess.NaritaAirportTerminal1': {
      code: 'KS-42',
      name: '成田空港（成田第1ターミナル）',
    },
    'Keisei.Oshiage.Aoto': {
      code: 'KS-09',
      name: '青砥',
    },
    'Minatomirai.Minatomirai.MotomachiChukagai': {
      code: 'MM-06',
      name: '元町・中華街'
    },
    'Odakyu.Odawara.Isehara': {
      code: 'OH-36',
      name: '伊勢原',
    },
    'Odakyu.Odawara.MukogaokaYuen': {
      code: 'OH-19',
      name: '向ヶ丘遊園',
    },
    'Odakyu.Odawara.SeijogakuenMae': {
      code: 'OH-14',
      name: '成城学園前',
    },
    'Odakyu.Tama.Karakida': {
      code: 'OT-07',
      name: '唐木田',
    },
    'SaitamaRailway.SaitamaRailway.UrawaMisono': {
      code: 'SR-26',
      name: '浦和美園',
    },
    'Seibu.Ikebukuro.Hanno': {
      code: 'SI-26',
      name: '飯能',
    },
    'Seibu.Ikebukuro.Hoya': {
      code: 'SI-12',
      name: '保谷',
    },
    'Seibu.Ikebukuro.Kiyose': {
      code: 'SI-15',
      name: '清瀬',
    },
    'Seibu.Ikebukuro.Kotesashi': {
      code: 'SI-19',
      name: '小手指',
    },
    'Seibu.Ikebukuro.ShakujiiKoen': {
      code: 'SI-10',
      name: '石神井公園',
    },
    'Seibu.Ikebukuro.Tokorozawa': {
      code: 'SI-17',
      name: '所沢',
    },
    'Shibayama.Shibayama.ShibayamaChiyoda': {
      code: 'SR-01',
      name: '芝山千代田'
    },
    'Sotetsu.Izumino.Shonandai': {
      code: 'SO-37',
      name: '湘南台',
    },
    'Sotetsu.Main.Ebina': {
      code: 'SO-18',
      name: '海老名',
    },
    'Tobu.TobuSkytree.KitaKoshigaya': {
      code: 'TS-22',
      name: '北越谷',
    },
    'Tobu.TobuSkytree.Takenotsuka': {
      code: 'TS-14',
      name: '竹ノ塚',
    },
    'Tobu.TobuSkytree.TobuDobutsuKoen': {
      code: 'TS-30',
      name: '東武動物公園',
    },
    'Tobu.Tojo.Kawagoeshi': {
      code: 'TJ-22',
      name: '川越市'
    },
    'Tobu.Tojo.Shiki': {
      code: 'TJ-14',
      name: '志木',
    },
    'Tobu.Tojo.ShinrinKoen': {
      code: 'TJ-30',
      name: '森林公園'
    },
    'TokyoMetro.MarunouchiBranch.Honancho': {
      code: 'm03',
      name: '方南町',
    },
    'Tokyu.Meguro.Hiyoshi': {
      code: 'MG-13',
      name: '日吉',
    },
    'Tokyu.Meguro.MusashiKosugi': {
      code: 'MG-11',
      name: '武蔵小杉',
    },
    'Tokyu.TokyuShinYokohama.ShinYokohama': {
      code: 'SH-01',
      name: '新横浜',
    },
    'Tokyu.Toyoko.MusashiKosugi': {
      code: 'TY-11',
      name: '武蔵小杉',
    },
    'ToyoRapid.ToyoRapid.ToyoKatsutadai': {
      code: 'TR-09',
      name: '東葉勝田台',
    },
  },
  station_order: {
    'Toei.Asakusa': ['A-01', 'A-02', 'A-03', 'A-04', 'A-05', 'A-06', 'A-07', 'A-08', 'A-09', 'A-10', 'A-11', 'A-12', 'A-13', 'A-14', 'A-15', 'A-16', 'A-17', 'A-18', 'A-19', 'A-20'],
    'Toei.Shinjuku': ['S-01', 'S-02', 'S-03', 'S-04', 'S-05', 'S-06', 'S-07', 'S-08', 'S-09', 'S-10', 'S-11', 'S-12', 'S-13', 'S-14', 'S-15', 'S-16', 'S-17', 'S-18', 'S-19', 'S-20', 'S-21'],
    'TokyoMetro.Chiyoda': ['C01', 'C02', 'C03', 'C04', 'C05', 'C06', 'C07', 'C08', 'C09', 'C10', 'C11', 'C12', 'C13', 'C14', 'C15', 'C16', 'C17', 'C18', 'C19', 'C20'],
    'TokyoMetro.Fukutoshin': ['F01', 'F02', 'F03', 'F04', 'F05', 'F06', 'F07', 'F08', 'F09', 'F10', 'F11', 'F12', 'F13', 'F14', 'F15', 'F16'],
    'TokyoMetro.Hibiya': ['H01', 'H02', 'H03', 'H04', 'H05', 'H06', 'H07', 'H08', 'H09', 'H10', 'H11', 'H12', 'H13', 'H14', 'H15', 'H16', 'H17', 'H18', 'H19', 'H20', 'H21', 'H22'],
    'TokyoMetro.Marunouchi': ['M01', 'M02', 'M03', 'M04', 'M05', 'M06', 'M07', 'M08', 'M09', 'M10', 'M11', 'M12', 'M13', 'M14', 'M15', 'M16', 'M17', 'M18', 'M19', 'M20', 'M21', 'M22', 'M23', 'M24', 'M25'],
    'TokyoMetro.Namboku': ['N01', 'N02', 'N03', 'N04', 'N05', 'N06', 'N07', 'N08', 'N09', 'N10', 'N11', 'N12', 'N13', 'N14', 'N15', 'N16', 'N17', 'N18', 'N19'],
    'TokyoMetro.Tozai': ['T01', 'T02', 'T03', 'T04', 'T05', 'T06', 'T07', 'T08', 'T09', 'T10', 'T11', 'T12', 'T13', 'T14', 'T15', 'T16', 'T17', 'T18', 'T19', 'T20', 'T21', 'T22', 'T23'],
    'TokyoMetro.Yurakucho': ['Y01', 'Y02', 'Y03', 'Y04', 'Y05', 'Y06', 'Y07', 'Y08', 'Y09', 'Y10', 'Y11', 'Y12', 'Y13', 'Y14', 'Y15', 'Y16', 'Y17', 'Y18', 'Y19', 'Y20', 'Y21', 'Y22', 'Y23', 'Y24'],
  },
  trainType: {
    'Toei.Asakusa': {
      'Toei.Local': '普通',
      'Toei.Rapid': '快速',
      'Toei.Express': '急行',
      'Toei.LimitedExpress': '特急',
      'Toei.AccessExpress': 'アクセス特急',
      'Toei.RapidLimitedExpress': '快速特急',
      'Toei.AirportRapidLimitedExpress': 'エアポート快特',
    },
    'Toei.Shinjuku': {
      'Toei.Local': '各停',
      'Toei.Express': '急行',
    },
    'TokyoMetro.Chiyoda': {
      'TokyoMetro.Local': '各駅停車',
      'TokyoMetro.SemiExpress': '準急',
      'TokyoMetro.Express': '急行',
    },
    'TokyoMetro.Fukutoshin': {
      'TokyoMetro.Local': '各駅停車',
      'TokyoMetro.Express': '急行',
      'TokyoMetro.CommuterExpress': '通勤急行',
      'TokyoMetro.F-Liner': "Fライナー急行",
    },
    'TokyoMetro.Hibiya': {
      'TokyoMetro.Local': '各駅停車',
    },
    'TokyoMetro.Marunouchi': {
      'TokyoMetro.Local': '各駅停車',
    },
    'TokyoMetro.Namboku': {
      'TokyoMetro.Local': '各駅停車',
      'TokyoMetro.Express': '急行',
    },
    'TokyoMetro.Tozai': {
      'TokyoMetro.Local': '各駅停車',
      'TokyoMetro.Rapid': '快速',
    },
    'TokyoMetro.Yurakucho': {
      'TokyoMetro.Local': '各駅停車',
      'TokyoMetro.Rapid': '快速',
      'TokyoMetro.SemiExpress': '準急',
      'TokyoMetro.RapidExpress': '快速急行',
    },
  },
  train_location_format: {
    'Toei.Asakusa': 'JSON',
    'Toei.Shinjuku': 'JSON',
    'TokyoMetro.Chiyoda': 'GTFS-RT',
    'TokyoMetro.Fukutoshin': 'GTFS-RT',
    'TokyoMetro.Hibiya': 'GTFS-RT',
    'TokyoMetro.Marunouchi': 'GTFS-RT',
    'TokyoMetro.Namboku': 'GTFS-RT',
    'TokyoMetro.Tozai': 'GTFS-RT',
    'TokyoMetro.Yurakucho': 'GTFS-RT',
  },
}
