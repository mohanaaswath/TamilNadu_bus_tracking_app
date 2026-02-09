import { Route } from "@/types/bus";

export const routes: Route[] = [
  // Chennai
  { routeId: "21G", routeName: "Broadway to Tambaram", district: "chennai", stops: [
    { stopName: "Broadway", lat: 13.0878, lng: 80.2785, order: 1 },
    { stopName: "Parry's Corner", lat: 13.0832, lng: 80.2838, order: 2 },
    { stopName: "Chennai Central", lat: 13.0827, lng: 80.2707, order: 3 },
    { stopName: "Egmore", lat: 13.0732, lng: 80.2609, order: 4 },
    { stopName: "T. Nagar", lat: 13.0418, lng: 80.2341, order: 5 },
    { stopName: "Saidapet", lat: 13.0214, lng: 80.2241, order: 6 },
    { stopName: "Guindy", lat: 13.0067, lng: 80.2206, order: 7 },
    { stopName: "Tambaram", lat: 12.9249, lng: 80.1000, order: 8 },
  ]},
  { routeId: "5C", routeName: "Thiruvanmiyur to CMBT", district: "chennai", stops: [
    { stopName: "Thiruvanmiyur", lat: 12.9830, lng: 80.2594, order: 1 },
    { stopName: "Adyar", lat: 13.0012, lng: 80.2565, order: 2 },
    { stopName: "Kotturpuram", lat: 13.0158, lng: 80.2443, order: 3 },
    { stopName: "Nandanam", lat: 13.0310, lng: 80.2380, order: 4 },
    { stopName: "Teynampet", lat: 13.0450, lng: 80.2490, order: 5 },
    { stopName: "Nungambakkam", lat: 13.0569, lng: 80.2425, order: 6 },
    { stopName: "Koyambedu CMBT", lat: 13.0694, lng: 80.1948, order: 7 },
  ]},
  { routeId: "102", routeName: "Perambur to Sholinganallur", district: "chennai", stops: [
    { stopName: "Perambur", lat: 13.1100, lng: 80.2400, order: 1 },
    { stopName: "Kellys", lat: 13.0880, lng: 80.2560, order: 2 },
    { stopName: "Anna Salai", lat: 13.0600, lng: 80.2500, order: 3 },
    { stopName: "Mylapore", lat: 13.0340, lng: 80.2680, order: 4 },
    { stopName: "Velachery", lat: 12.9815, lng: 80.2180, order: 5 },
    { stopName: "Sholinganallur", lat: 12.9010, lng: 80.2279, order: 6 },
  ]},
  // Coimbatore
  { routeId: "7A", routeName: "Gandhipuram to Singanallur", district: "coimbatore", stops: [
    { stopName: "Gandhipuram", lat: 11.0168, lng: 76.9558, order: 1 },
    { stopName: "Town Hall", lat: 11.0120, lng: 76.9620, order: 2 },
    { stopName: "RS Puram", lat: 11.0050, lng: 76.9500, order: 3 },
    { stopName: "Peelamedu", lat: 11.0200, lng: 77.0020, order: 4 },
    { stopName: "Singanallur", lat: 10.9951, lng: 77.0318, order: 5 },
  ]},
  { routeId: "48B", routeName: "Ukkadam to Saravanampatti", district: "coimbatore", stops: [
    { stopName: "Ukkadam", lat: 10.9970, lng: 76.9610, order: 1 },
    { stopName: "Gandhipuram", lat: 11.0168, lng: 76.9558, order: 2 },
    { stopName: "Hopes College", lat: 11.0280, lng: 76.9620, order: 3 },
    { stopName: "Saravanampatti", lat: 11.0560, lng: 76.9960, order: 4 },
  ]},
  { routeId: "S1", routeName: "Gandhipuram to Pollachi", district: "coimbatore", stops: [
    { stopName: "Gandhipuram", lat: 11.0168, lng: 76.9558, order: 1 },
    { stopName: "Kinathukadavu", lat: 10.8000, lng: 76.9900, order: 2 },
    { stopName: "Pollachi", lat: 10.6600, lng: 77.0082, order: 3 },
  ]},
  // Madurai
  { routeId: "M1", routeName: "Periyar to Mattuthavani", district: "madurai", stops: [
    { stopName: "Periyar Bus Stand", lat: 9.9190, lng: 78.1193, order: 1 },
    { stopName: "Meenakshi Temple", lat: 9.9195, lng: 78.1193, order: 2 },
    { stopName: "Goripalayam", lat: 9.9282, lng: 78.1233, order: 3 },
    { stopName: "Anna Nagar", lat: 9.9380, lng: 78.1300, order: 4 },
    { stopName: "Mattuthavani", lat: 9.9505, lng: 78.1450, order: 5 },
  ]},
  { routeId: "M7", routeName: "Arapalayam to Thiruparankundram", district: "madurai", stops: [
    { stopName: "Arapalayam", lat: 9.9100, lng: 78.1050, order: 1 },
    { stopName: "Periyar", lat: 9.9190, lng: 78.1193, order: 2 },
    { stopName: "Tallakulam", lat: 9.9050, lng: 78.1250, order: 3 },
    { stopName: "Thiruparankundram", lat: 9.8780, lng: 78.0770, order: 4 },
  ]},
  { routeId: "M12", routeName: "Mattuthavani to Melur", district: "madurai", stops: [
    { stopName: "Mattuthavani", lat: 9.9505, lng: 78.1450, order: 1 },
    { stopName: "Vilangudi", lat: 9.9600, lng: 78.1600, order: 2 },
    { stopName: "Melur", lat: 10.0300, lng: 78.3400, order: 3 },
  ]},
  // Tiruchirappalli
  { routeId: "T1", routeName: "Central Bus Stand to Srirangam", district: "tiruchirappalli", stops: [
    { stopName: "Central Bus Stand", lat: 10.7905, lng: 78.7047, order: 1 },
    { stopName: "Chathiram Bus Stand", lat: 10.8080, lng: 78.6870, order: 2 },
    { stopName: "Srirangam", lat: 10.8560, lng: 78.6916, order: 3 },
  ]},
  { routeId: "T5", routeName: "Trichy to Lalgudi", district: "tiruchirappalli", stops: [
    { stopName: "Central Bus Stand", lat: 10.7905, lng: 78.7047, order: 1 },
    { stopName: "Thillai Nagar", lat: 10.7960, lng: 78.7200, order: 2 },
    { stopName: "Lalgudi", lat: 10.8720, lng: 78.8130, order: 3 },
  ]},
  { routeId: "T9", routeName: "Trichy to Musiri", district: "tiruchirappalli", stops: [
    { stopName: "Chathiram", lat: 10.8080, lng: 78.6870, order: 1 },
    { stopName: "Thuraiyur Rd", lat: 10.8700, lng: 78.6200, order: 2 },
    { stopName: "Musiri", lat: 10.9530, lng: 78.4430, order: 3 },
  ]},
  // Salem
  { routeId: "SL3", routeName: "New Bus Stand to Attur", district: "salem", stops: [
    { stopName: "New Bus Stand", lat: 11.6500, lng: 78.1550, order: 1 },
    { stopName: "Suramangalam", lat: 11.6700, lng: 78.1700, order: 2 },
    { stopName: "Attur", lat: 11.5950, lng: 78.5980, order: 3 },
  ]},
  { routeId: "SL7", routeName: "Salem to Mettur", district: "salem", stops: [
    { stopName: "Old Bus Stand", lat: 11.6600, lng: 78.1400, order: 1 },
    { stopName: "Omalur", lat: 11.7440, lng: 78.0450, order: 2 },
    { stopName: "Mettur Dam", lat: 11.7880, lng: 77.8020, order: 3 },
  ]},
  { routeId: "SL11", routeName: "Salem to Yercaud", district: "salem", stops: [
    { stopName: "Salem CBS", lat: 11.6643, lng: 78.1460, order: 1 },
    { stopName: "Kanavaipudur", lat: 11.7000, lng: 78.1800, order: 2 },
    { stopName: "Yercaud", lat: 11.7750, lng: 78.2060, order: 3 },
  ]},
  // Thanjavur
  { routeId: "TJ1", routeName: "Thanjavur to Kumbakonam", district: "thanjavur", stops: [
    { stopName: "Thanjavur CBS", lat: 10.7870, lng: 79.1378, order: 1 },
    { stopName: "Papanasam", lat: 10.9250, lng: 79.2710, order: 2 },
    { stopName: "Kumbakonam", lat: 10.9617, lng: 79.3881, order: 3 },
  ]},
  { routeId: "TJ5", routeName: "Thanjavur to Pattukottai", district: "thanjavur", stops: [
    { stopName: "Thanjavur CBS", lat: 10.7870, lng: 79.1378, order: 1 },
    { stopName: "Orathanadu", lat: 10.6500, lng: 79.2200, order: 2 },
    { stopName: "Pattukottai", lat: 10.4260, lng: 79.3190, order: 3 },
  ]},
  { routeId: "TJ9", routeName: "Thanjavur Town Bus", district: "thanjavur", stops: [
    { stopName: "Old Bus Stand", lat: 10.7820, lng: 79.1320, order: 1 },
    { stopName: "Big Temple", lat: 10.7828, lng: 79.1318, order: 2 },
    { stopName: "Medical College", lat: 10.7950, lng: 79.1500, order: 3 },
    { stopName: "New Bus Stand", lat: 10.7870, lng: 79.1378, order: 4 },
  ]},
  // Kanyakumari
  { routeId: "KK1", routeName: "Nagercoil to Kanyakumari", district: "kanyakumari", stops: [
    { stopName: "Nagercoil", lat: 8.1833, lng: 77.4119, order: 1 },
    { stopName: "Kottar", lat: 8.1750, lng: 77.4250, order: 2 },
    { stopName: "Kanyakumari", lat: 8.0883, lng: 77.5385, order: 3 },
  ]},
  { routeId: "KK5", routeName: "Nagercoil to Marthandam", district: "kanyakumari", stops: [
    { stopName: "Nagercoil", lat: 8.1833, lng: 77.4119, order: 1 },
    { stopName: "Thuckalay", lat: 8.2510, lng: 77.3270, order: 2 },
    { stopName: "Marthandam", lat: 8.3070, lng: 77.2190, order: 3 },
  ]},
  { routeId: "KK9", routeName: "Nagercoil to Padmanabhapuram", district: "kanyakumari", stops: [
    { stopName: "Nagercoil CBS", lat: 8.1833, lng: 77.4119, order: 1 },
    { stopName: "Thuckalay", lat: 8.2510, lng: 77.3270, order: 2 },
    { stopName: "Padmanabhapuram", lat: 8.2380, lng: 77.3260, order: 3 },
  ]},
  // Vellore
  { routeId: "VL1", routeName: "Vellore to Ambur", district: "vellore", stops: [
    { stopName: "Vellore CBS", lat: 12.9165, lng: 79.1325, order: 1 },
    { stopName: "Gudiyatham", lat: 12.9450, lng: 78.8700, order: 2 },
    { stopName: "Ambur", lat: 12.7890, lng: 78.7160, order: 3 },
  ]},
  { routeId: "VL4", routeName: "Vellore Fort to CMC", district: "vellore", stops: [
    { stopName: "Vellore Fort", lat: 12.9209, lng: 79.1325, order: 1 },
    { stopName: "Long Bazaar", lat: 12.9160, lng: 79.1370, order: 2 },
    { stopName: "Sathuvachari", lat: 12.9380, lng: 79.1550, order: 3 },
    { stopName: "CMC Hospital", lat: 12.9260, lng: 79.1350, order: 4 },
  ]},
  { routeId: "VL7", routeName: "Vellore to Katpadi", district: "vellore", stops: [
    { stopName: "Vellore CBS", lat: 12.9165, lng: 79.1325, order: 1 },
    { stopName: "Katpadi Jn", lat: 12.9700, lng: 79.1450, order: 2 },
  ]},
  // Tirunelveli
  { routeId: "TN1", routeName: "Tirunelveli to Palayamkottai", district: "tirunelveli", stops: [
    { stopName: "Tirunelveli Jn", lat: 8.7139, lng: 77.7567, order: 1 },
    { stopName: "Melapalayam", lat: 8.7050, lng: 77.7400, order: 2 },
    { stopName: "Palayamkottai", lat: 8.7220, lng: 77.7440, order: 3 },
  ]},
  { routeId: "TN5", routeName: "Tirunelveli to Tenkasi", district: "tirunelveli", stops: [
    { stopName: "Tirunelveli CBS", lat: 8.7139, lng: 77.7567, order: 1 },
    { stopName: "Sankarankovil", lat: 9.1770, lng: 77.5460, order: 2 },
    { stopName: "Tenkasi", lat: 8.9604, lng: 77.3152, order: 3 },
  ]},
  { routeId: "TN9", routeName: "Tirunelveli to Courtallam", district: "tirunelveli", stops: [
    { stopName: "Tirunelveli CBS", lat: 8.7139, lng: 77.7567, order: 1 },
    { stopName: "Tenkasi", lat: 8.9604, lng: 77.3152, order: 2 },
    { stopName: "Courtallam", lat: 8.9330, lng: 77.2760, order: 3 },
  ]},
  // Erode
  { routeId: "ER1", routeName: "Erode to Bhavani", district: "erode", stops: [
    { stopName: "Erode CBS", lat: 11.3410, lng: 77.7172, order: 1 },
    { stopName: "Chithode", lat: 11.4000, lng: 77.7600, order: 2 },
    { stopName: "Bhavani", lat: 11.4500, lng: 77.6820, order: 3 },
  ]},
  { routeId: "ER5", routeName: "Erode to Gobichettipalayam", district: "erode", stops: [
    { stopName: "Erode CBS", lat: 11.3410, lng: 77.7172, order: 1 },
    { stopName: "Kavundapadi", lat: 11.3600, lng: 77.6300, order: 2 },
    { stopName: "Gobichettipalayam", lat: 11.4530, lng: 77.4370, order: 3 },
  ]},
  { routeId: "ER9", routeName: "Erode to Perundurai", district: "erode", stops: [
    { stopName: "Erode CBS", lat: 11.3410, lng: 77.7172, order: 1 },
    { stopName: "Chennimalai", lat: 11.1640, lng: 77.6050, order: 2 },
    { stopName: "Perundurai", lat: 11.2750, lng: 77.5900, order: 3 },
  ]},
  // Remaining districts — 3 routes each with minimal stops
  ...generateSimpleRoutes("chengalpattu", "Chengalpattu", 12.6819, 79.9888),
  ...generateSimpleRoutes("kancheepuram", "Kancheepuram", 12.8342, 79.7036),
  ...generateSimpleRoutes("tiruvallur", "Tiruvallur", 13.1431, 79.9082),
  ...generateSimpleRoutes("ranipet", "Ranipet", 12.9224, 79.3333),
  ...generateSimpleRoutes("tirupattur", "Tirupattur", 12.4964, 78.5730),
  ...generateSimpleRoutes("krishnagiri", "Krishnagiri", 12.5186, 78.2137),
  ...generateSimpleRoutes("dharmapuri", "Dharmapuri", 12.1211, 78.1582),
  ...generateSimpleRoutes("namakkal", "Namakkal", 11.2189, 78.1674),
  ...generateSimpleRoutes("tiruppur", "Tiruppur", 11.1085, 77.3411),
  ...generateSimpleRoutes("nilgiris", "Nilgiris", 11.4916, 76.7337),
  ...generateSimpleRoutes("karur", "Karur", 10.9601, 78.0766),
  ...generateSimpleRoutes("perambalur", "Perambalur", 11.2320, 78.8807),
  ...generateSimpleRoutes("ariyalur", "Ariyalur", 11.1401, 79.0783),
  ...generateSimpleRoutes("theni", "Theni", 10.0104, 77.4768),
  ...generateSimpleRoutes("dindigul", "Dindigul", 10.3673, 77.9803),
  ...generateSimpleRoutes("sivagangai", "Sivagangai", 10.0301, 78.8489),
  ...generateSimpleRoutes("ramanathapuram", "Ramanathapuram", 9.3639, 78.8395),
  ...generateSimpleRoutes("virudhunagar", "Virudhunagar", 9.5851, 77.9526),
  ...generateSimpleRoutes("thoothukudi", "Thoothukudi", 8.7642, 78.1348),
  ...generateSimpleRoutes("tenkasi", "Tenkasi", 8.9604, 77.3152),
  ...generateSimpleRoutes("tiruvarur", "Tiruvarur", 10.7661, 79.6369),
  ...generateSimpleRoutes("nagapattinam", "Nagapattinam", 10.7672, 79.8449),
  ...generateSimpleRoutes("mayiladuthurai", "Mayiladuthurai", 11.1014, 79.6528),
  ...generateSimpleRoutes("cuddalore", "Cuddalore", 11.7480, 79.7714),
  ...generateSimpleRoutes("villupuram", "Villupuram", 11.9401, 79.4861),
  ...generateSimpleRoutes("kallakurichi", "Kallakurichi", 11.7383, 78.9614),
  ...generateSimpleRoutes("tiruvannamalai", "Tiruvannamalai", 12.2253, 79.0747),
  ...generateSimpleRoutes("pudukkottai", "Pudukkottai", 10.3833, 78.8001),
];

function generateSimpleRoutes(districtId: string, name: string, lat: number, lng: number): Route[] {
  const prefix = districtId.substring(0, 2).toUpperCase();
  return [
    {
      routeId: `${prefix}1`,
      routeName: `${name} Town Bus 1`,
      district: districtId,
      stops: [
        { stopName: `${name} CBS`, lat, lng, order: 1 },
        { stopName: `${name} Junction`, lat: lat + 0.015, lng: lng + 0.01, order: 2 },
        { stopName: `${name} East`, lat: lat + 0.025, lng: lng + 0.025, order: 3 },
      ],
    },
    {
      routeId: `${prefix}3`,
      routeName: `${name} Town Bus 3`,
      district: districtId,
      stops: [
        { stopName: `${name} Bus Stand`, lat, lng, order: 1 },
        { stopName: `${name} West`, lat: lat - 0.01, lng: lng - 0.02, order: 2 },
        { stopName: `${name} South`, lat: lat - 0.03, lng: lng - 0.01, order: 3 },
      ],
    },
    {
      routeId: `${prefix}5`,
      routeName: `${name} Express`,
      district: districtId,
      stops: [
        { stopName: `${name} CBS`, lat, lng, order: 1 },
        { stopName: `${name} Bypass`, lat: lat + 0.04, lng: lng + 0.03, order: 2 },
        { stopName: `${name} Outskirts`, lat: lat + 0.07, lng: lng + 0.06, order: 3 },
      ],
    },
  ];
}
