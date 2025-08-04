export const BOOKS = {
  dystopian: {
    title: '1984',
    author: 'George Orwell',
    reason: 'Challenged for political themes and social criticism.',
  },
  fantasy: {
    title: 'Harry Potter and the Sorcerer\'s Stone',
    author: 'J.K. Rowling',
    reason: 'Banned for alleged promotion of witchcraft.',
  },
  lgbtq: {
    title: 'Gender Queer',
    author: 'Maia Kobabe',
    reason: 'Challenged for LGBTQ+ content.',
  },
  race: {
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    reason: 'Challenged for racial themes and language.',
  },
} as const;

export type BookCategory = keyof typeof BOOKS;