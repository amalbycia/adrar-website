export interface Client {
  id: string
  name: string
  logoSrc?: string
  // style variation so text-based names feel like distinct wordmarks
  weight?: 'normal' | 'bold' | 'black'
  tracking?: 'tight' | 'normal' | 'wide'
}

// Row 1 — retail & grocery
export const clientsRow1: Client[] = [
  { id: 'carrefour',   name: 'Carrefour',        weight: 'bold',   tracking: 'tight'  },
  { id: 'lulu',        name: 'Lulu Hypermarket',  weight: 'black',  tracking: 'tight'  },
  { id: 'union-coop',  name: 'Union Coop',        weight: 'normal', tracking: 'wide'   },
  { id: 'spinneys',    name: 'Spinneys',          weight: 'bold',   tracking: 'normal' },
  { id: 'nesto',       name: 'Nesto',             weight: 'black',  tracking: 'wide'   },
  { id: 'al-maya',     name: 'Al Maya',           weight: 'normal', tracking: 'wide'   },
  { id: 'choithrams',  name: 'Choithrams',        weight: 'bold',   tracking: 'tight'  },
  { id: 'geant',       name: 'Géant',             weight: 'black',  tracking: 'normal' },
  { id: 'waitrose',    name: 'Waitrose',          weight: 'normal', tracking: 'normal' },
  { id: 'west-zone',   name: 'West Zone',         weight: 'bold',   tracking: 'wide'   },
]

// Row 2 — property, telco & lifestyle
export const clientsRow2: Client[] = [
  { id: 'emaar',       name: 'Emaar',             weight: 'black',  tracking: 'wide'   },
  { id: 'dewa',        name: 'DEWA',              weight: 'bold',   tracking: 'wide'   },
  { id: 'etisalat',    name: 'Etisalat',          weight: 'normal', tracking: 'normal' },
  { id: 'du',          name: 'du',                weight: 'black',  tracking: 'tight'  },
  { id: 'noon',        name: 'Noon',              weight: 'bold',   tracking: 'tight'  },
  { id: 'talabat',     name: 'Talabat',           weight: 'black',  tracking: 'normal' },
  { id: 'maf',         name: 'Majid Al Futtaim',  weight: 'normal', tracking: 'wide'   },
  { id: 'aldar',       name: 'Aldar',             weight: 'bold',   tracking: 'wide'   },
  { id: 'rta',         name: 'RTA',               weight: 'black',  tracking: 'wide'   },
  { id: 'dubai-mall',  name: 'The Dubai Mall',    weight: 'normal', tracking: 'tight'  },
]

// Flat list kept for any component that needs it
export const clients = [...clientsRow1, ...clientsRow2]
