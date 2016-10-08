import { InMemoryDbService } from 'angular-in-memory-web-api';
export class CommentsInMemoryData implements InMemoryDbService {
  createDb() {
    let comment = [{
      "id": 1,
      "date": "3/16/2016",
      "text": "Right-sized global local area network",
      "name": "Annie Garrett"
    }, {
      "id": 2,
      "date": "6/21/2016",
      "text": "Customer-focused systemic conglomeration",
      "name": "Carol Mason"
    }, {
      "id": 3,
      "date": "8/11/2016",
      "text": "Extended motivating benchmark",
      "name": "Russell Hill"
    }, {
      "id": 4,
      "date": "3/31/2016",
      "text": "Multi-tiered foreground moratorium",
      "name": "Kelly Flores"
    }, {
      "id": 5,
      "date": "6/12/2016",
      "text": "Multi-lateral eco-centric forecast",
      "name": "James Diaz"
    }, {
      "id": 6,
      "date": "12/31/2015",
      "text": "Profound homogeneous forecast",
      "name": "Samuel Lawson"
    }, {
      "id": 7,
      "date": "7/31/2016",
      "text": "Distributed impactful capacity",
      "name": "Jennifer Stanley"
    }, {
      "id": 8,
      "date": "5/4/2016",
      "text": "Grass-roots responsive secured line",
      "name": "Nicole Harvey"
    }, {
      "id": 9,
      "date": "7/31/2016",
      "text": "Assimilated background monitoring",
      "name": "Sandra Boyd"
    }, {
      "id": 10,
      "date": "11/9/2015",
      "text": "Team-oriented contextually-based time-frame",
      "name": "Philip Armstrong"
    }, {
      "id": 11,
      "date": "9/26/2016",
      "text": "Universal even-keeled infrastructure",
      "name": "Patricia Barnes"
    }, {
      "id": 12,
      "date": "10/21/2015",
      "text": "Triple-buffered exuding framework",
      "name": "Kenneth Mason"
    }, {
      "id": 13,
      "date": "7/25/2016",
      "text": "Synergized impactful process improvement",
      "name": "Virginia Johnson"
    }, {
      "id": 14,
      "date": "11/10/2015",
      "text": "Synchronised attitude-oriented toolset",
      "name": "Michelle Grant"
    }, {
      "id": 15,
      "date": "8/25/2016",
      "text": "Synchronised tertiary benchmark",
      "name": "Martha Burke"
    }, {
      "id": 16,
      "date": "8/17/2016",
      "text": "User-friendly clear-thinking initiative",
      "name": "Michael Harvey"
    }, {
      "id": 17,
      "date": "7/10/2016",
      "text": "Up-sized zero administration knowledge user",
      "name": "Jennifer Flores"
    }, {
      "id": 18,
      "date": "4/16/2016",
      "text": "Distributed bandwidth-monitored frame",
      "name": "Clarence Carter"
    }, {
      "id": 19,
      "date": "10/8/2015",
      "text": "Customer-focused contextually-based project",
      "name": "Joshua Stone"
    }, {
      "id": 20,
      "date": "5/31/2016",
      "text": "Centralized directional firmware",
      "name": "Betty West"
    }, {
      "id": 21,
      "date": "2/11/2016",
      "text": "Grass-roots analyzing structure",
      "name": "Andrew Richardson"
    }, {
      "id": 22,
      "date": "12/28/2015",
      "text": "Enhanced intangible focus group",
      "name": "Christine Hernandez"
    }, {
      "id": 23,
      "date": "1/1/2016",
      "text": "Profound 4th generation leverage",
      "name": "Gregory Fuller"
    }, {
      "id": 24,
      "date": "7/1/2016",
      "text": "Integrated radical Graphical User Interface",
      "name": "Shawn Olson"
    }, {
      "id": 25,
      "date": "12/18/2015",
      "text": "Persistent scalable archive",
      "name": "Donald Armstrong"
    }, {
      "id": 26,
      "date": "7/6/2016",
      "text": "Face to face motivating challenge",
      "name": "Jeffrey Moreno"
    }, {
      "id": 27,
      "date": "12/28/2015",
      "text": "Reduced logistical moratorium",
      "name": "Bonnie Spencer"
    }, {
      "id": 28,
      "date": "9/25/2016",
      "text": "Persevering national interface",
      "name": "Deborah Campbell"
    }, {
      "id": 29,
      "date": "10/1/2016",
      "text": "Switchable fault-tolerant encoding",
      "name": "Andrea Henry"
    }, {
      "id": 30,
      "date": "3/31/2016",
      "text": "Team-oriented 6th generation model",
      "name": "William Young"
    }, {
      "id": 31,
      "date": "10/2/2016",
      "text": "Universal hybrid monitoring",
      "name": "Douglas Dunn"
    }, {
      "id": 32,
      "date": "5/8/2016",
      "text": "Multi-channelled attitude-oriented model",
      "name": "Stephanie Gray"
    }, {
      "id": 33,
      "date": "11/25/2015",
      "text": "Virtual reciprocal interface",
      "name": "Ryan Butler"
    }, {
      "id": 34,
      "date": "9/30/2016",
      "text": "Multi-layered encompassing local area network",
      "name": "Julia King"
    }, {
      "id": 35,
      "date": "4/12/2016",
      "text": "Digitized national array",
      "name": "Eric Olson"
    }, {
      "id": 36,
      "date": "6/18/2016",
      "text": "Advanced client-driven data-warehouse",
      "name": "Karen Payne"
    }, {
      "id": 37,
      "date": "2/4/2016",
      "text": "User-centric even-keeled info-mediaries",
      "name": "Chris Morrison"
    }, {
      "id": 38,
      "date": "10/1/2016",
      "text": "User-centric local synergy",
      "name": "Judith Riley"
    }, {
      "id": 39,
      "date": "12/18/2015",
      "text": "Customer-focused web-enabled standardization",
      "name": "Jean Simpson"
    }, {
      "id": 40,
      "date": "7/15/2016",
      "text": "Grass-roots dynamic implementation",
      "name": "Antonio Duncan"
    }, {
      "id": 41,
      "date": "9/16/2016",
      "text": "Optional modular encoding",
      "name": "Larry Carter"
    }, {
      "id": 42,
      "date": "8/31/2016",
      "text": "Implemented fault-tolerant collaboration",
      "name": "Heather Armstrong"
    }, {
      "id": 43,
      "date": "10/21/2015",
      "text": "Customizable systematic superstructure",
      "name": "Matthew Washington"
    }, {
      "id": 44,
      "date": "2/18/2016",
      "text": "Open-architected secondary capability",
      "name": "Judy Fisher"
    }, {
      "id": 45,
      "date": "5/11/2016",
      "text": "Cloned didactic toolset",
      "name": "Juan Mccoy"
    }, {
      "id": 46,
      "date": "10/28/2015",
      "text": "Up-sized contextually-based productivity",
      "name": "Eric Coleman"
    }, {
      "id": 47,
      "date": "1/7/2016",
      "text": "Universal directional encryption",
      "name": "Eugene Jordan"
    }, {
      "id": 48,
      "date": "11/22/2015",
      "text": "Total 24/7 open architecture",
      "name": "Roger Dunn"
    }, {
      "id": 49,
      "date": "7/1/2016",
      "text": "User-friendly leading edge alliance",
      "name": "Anne Wright"
    }, {
      "id": 50,
      "date": "12/15/2015",
      "text": "Team-oriented context-sensitive internet solution",
      "name": "Phyllis Torres"
    }, {
      "id": 51,
      "date": "1/28/2016",
      "text": "Multi-channelled tertiary database",
      "name": "Keith Barnes"
    }, {
      "id": 52,
      "date": "2/16/2016",
      "text": "Reactive global secured line",
      "name": "Jerry Fisher"
    }, {
      "id": 53,
      "date": "11/19/2015",
      "text": "Function-based stable instruction set",
      "name": "Michelle Henderson"
    }, {
      "id": 54,
      "date": "4/21/2016",
      "text": "Balanced coherent frame",
      "name": "Larry Wood"
    }, {
      "id": 55,
      "date": "12/10/2015",
      "text": "Multi-channelled national help-desk",
      "name": "Roy Mitchell"
    }, {
      "id": 56,
      "date": "5/12/2016",
      "text": "Implemented didactic complexity",
      "name": "Chris Edwards"
    }, {
      "id": 57,
      "date": "1/30/2016",
      "text": "Mandatory empowering functionalities",
      "name": "Mark Mitchell"
    }, {
      "id": 58,
      "date": "4/28/2016",
      "text": "Progressive bandwidth-monitored data-warehouse",
      "name": "Irene Collins"
    }, {
      "id": 59,
      "date": "6/25/2016",
      "text": "Function-based upward-trending neural-net",
      "name": "Sharon Ortiz"
    }, {
      "id": 60,
      "date": "7/21/2016",
      "text": "Adaptive next generation collaboration",
      "name": "Diana Stephens"
    }, {
      "id": 61,
      "date": "6/17/2016",
      "text": "Cross-group intangible matrices",
      "name": "Henry Rose"
    }, {
      "id": 62,
      "date": "10/4/2016",
      "text": "Synchronised tangible implementation",
      "name": "Keith Riley"
    }, {
      "id": 63,
      "date": "7/15/2016",
      "text": "Triple-buffered 24/7 workforce",
      "name": "Kathy Palmer"
    }, {
      "id": 64,
      "date": "7/7/2016",
      "text": "Visionary client-server time-frame",
      "name": "Rachel Sanders"
    }, {
      "id": 65,
      "date": "3/20/2016",
      "text": "Intuitive hybrid access",
      "name": "Annie Chavez"
    }, {
      "id": 66,
      "date": "11/19/2015",
      "text": "Up-sized scalable internet solution",
      "name": "Jean Sanders"
    }, {
      "id": 67,
      "date": "9/5/2016",
      "text": "Diverse exuding solution",
      "name": "Paul Morgan"
    }, {
      "id": 68,
      "date": "3/10/2016",
      "text": "Intuitive radical methodology",
      "name": "Victor Smith"
    }, {
      "id": 69,
      "date": "1/22/2016",
      "text": "De-engineered multi-tasking infrastructure",
      "name": "Eugene Fox"
    }, {
      "id": 70,
      "date": "9/27/2016",
      "text": "Organized secondary database",
      "name": "Melissa Gilbert"
    }, {
      "id": 71,
      "date": "10/11/2015",
      "text": "Focused bandwidth-monitored standardization",
      "name": "Alice Fisher"
    }, {
      "id": 72,
      "date": "2/11/2016",
      "text": "Re-engineered client-server customer loyalty",
      "name": "Carlos Perry"
    }, {
      "id": 73,
      "date": "6/28/2016",
      "text": "Seamless local service-desk",
      "name": "Peter Simpson"
    }, {
      "id": 74,
      "date": "9/12/2016",
      "text": "Programmable mission-critical support",
      "name": "Barbara Kim"
    }, {
      "id": 75,
      "date": "7/7/2016",
      "text": "Object-based contextually-based definition",
      "name": "Cheryl Gordon"
    }, {
      "id": 76,
      "date": "8/5/2016",
      "text": "Team-oriented heuristic local area network",
      "name": "Jesse Payne"
    }, {
      "id": 77,
      "date": "10/31/2015",
      "text": "Re-engineered global encryption",
      "name": "Jonathan Wagner"
    }, {
      "id": 78,
      "date": "8/20/2016",
      "text": "Pre-emptive client-server customer loyalty",
      "name": "Howard Romero"
    }, {
      "id": 79,
      "date": "4/25/2016",
      "text": "Integrated well-modulated alliance",
      "name": "Lawrence Chapman"
    }, {
      "id": 80,
      "date": "11/10/2015",
      "text": "Right-sized encompassing groupware",
      "name": "Nicholas Peterson"
    }, {
      "id": 81,
      "date": "7/20/2016",
      "text": "Organized well-modulated workforce",
      "name": "Jane Garza"
    }, {
      "id": 82,
      "date": "6/2/2016",
      "text": "Exclusive coherent archive",
      "name": "Sandra Day"
    }, {
      "id": 83,
      "date": "7/28/2016",
      "text": "Sharable mission-critical Graphical User Interface",
      "name": "Kathleen Patterson"
    }, {
      "id": 84,
      "date": "9/7/2016",
      "text": "Implemented clear-thinking productivity",
      "name": "Sara Myers"
    }, {
      "id": 85,
      "date": "4/21/2016",
      "text": "Grass-roots systemic Graphical User Interface",
      "name": "Jessica Banks"
    }, {
      "id": 86,
      "date": "7/10/2016",
      "text": "Sharable secondary contingency",
      "name": "Dorothy Sanders"
    }, {
      "id": 87,
      "date": "9/12/2016",
      "text": "User-friendly cohesive Graphical User Interface",
      "name": "Lawrence Williamson"
    }, {
      "id": 88,
      "date": "2/16/2016",
      "text": "Automated multi-tasking database",
      "name": "Larry Grant"
    }, {
      "id": 89,
      "date": "10/4/2016",
      "text": "Adaptive methodical knowledge base",
      "name": "Thomas Diaz"
    }, {
      "id": 90,
      "date": "5/8/2016",
      "text": "Front-line asymmetric task-force",
      "name": "Timothy Ryan"
    }, {
      "id": 91,
      "date": "6/24/2016",
      "text": "Optional full-range portal",
      "name": "Julie Smith"
    }, {
      "id": 92,
      "date": "8/10/2016",
      "text": "User-centric 24 hour model",
      "name": "Jeffrey Wagner"
    }, {
      "id": 93,
      "date": "4/27/2016",
      "text": "Total motivating leverage",
      "name": "Keith Perez"
    }, {
      "id": 94,
      "date": "5/25/2016",
      "text": "User-friendly needs-based benchmark",
      "name": "Amy Lynch"
    }, {
      "id": 95,
      "date": "1/31/2016",
      "text": "Exclusive methodical concept",
      "name": "Marilyn Nelson"
    }, {
      "id": 96,
      "date": "1/8/2016",
      "text": "Business-focused uniform productivity",
      "name": "Jennifer Spencer"
    }, {
      "id": 97,
      "date": "7/6/2016",
      "text": "Implemented multi-state projection",
      "name": "Linda Washington"
    }, {
      "id": 98,
      "date": "10/15/2015",
      "text": "Organized composite neural-net",
      "name": "Thomas Boyd"
    }, {
      "id": 99,
      "date": "4/19/2016",
      "text": "Multi-channelled secondary budgetary management",
      "name": "Teresa Miller"
    }, {
      "id": 100,
      "date": "2/10/2016",
      "text": "Automated grid-enabled open system",
      "name": "Charles Foster"
    }];
    return { comment };
  }
}