import { Book } from '@/app/types/book';

export const booksData: Book[] = [
  {
    id: '1',
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1615413833480-6e8427dbcc5e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncmVhdCUyMGdhdHNieSUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg2MTc5ODh8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A classic American novel set in the Jazz Age, exploring themes of decadence, idealism, and social upheaval in 1920s New York.',
    available: true,
    isbn: '978-0-7432-7356-5'
  },
  {
    id: '2',
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1743257165258-845a770fdffd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2NraW5nYmlyZCUyMGJvb2slMjBjb3ZlcnxlbnwxfHx8fDE3Njg2MTc5ODl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A gripping tale of racial injustice and childhood innocence in the American South during the Great Depression.',
    available: true,
    isbn: '978-0-06-112008-4'
  },
  {
    id: '3',
    title: 'A Brief History of Time',
    author: 'Stephen Hawking',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1602403110084-dae09492be83?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdGVwaGVuJTIwaGF3a2luZyUyMHBoeXNpY3MlMjBjb3Ntb3N8ZW58MXx8fHwxNzY4NzExOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A landmark volume in science writing exploring the universe from the Big Bang to black holes and beyond.',
    available: false,
    isbn: '978-0-553-10953-5'
  },
  {
    id: '4',
    title: 'The Selfish Gene',
    author: 'Richard Dawkins',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1725869973689-425c74f79a48?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2llbmNlJTIwdGV4dGJvb2t8ZW58MXx8fHwxNzY4NTMyMDE1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Revolutionary work on evolutionary biology presenting the gene-centered view of evolution and natural selection.',
    available: true,
    isbn: '978-0-19-929114-4'
  },
  {
    id: '5',
    title: 'Sapiens: A Brief History of Humankind',
    author: 'Yuval Noah Harari',
    genre: 'History',
    coverImage: 'https://images.unsplash.com/photo-1681566715515-42b2aa04a0c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3J5JTIwYm9vayUyMGFuY2llbnR8ZW58MXx8fHwxNzY4NjE3OTkwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A narrative history of humanity from the Stone Age to the present, examining how Homo sapiens came to dominate the world.',
    available: true,
    isbn: '978-0-06-231609-7'
  },
  {
    id: '6',
    title: 'The Guns of August',
    author: 'Barbara W. Tuchman',
    genre: 'History',
    coverImage: 'https://images.unsplash.com/photo-1541339246244-261d72e381b7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b3JsZCUyMHdhciUyMGhpc3Rvcnl8ZW58MXx8fHwxNzY4NTc2NDUwfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A detailed account of the first month of World War I, capturing the events that led to the Great War.',
    available: false,
    isbn: '978-0-345-47609-8'
  },
  {
    id: '7',
    title: '1984',
    author: 'George Orwell',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1752243731865-c2fa851af7ec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHwxOTg0JTIwZHlzdG9waWFuJTIwYm9va3xlbnwxfHx8fDE3Njg2MTc5OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A dystopian social science fiction novel depicting a totalitarian future society under constant surveillance.',
    available: true,
    isbn: '978-0-452-28423-4'
  },
  {
    id: '8',
    title: 'Cosmos',
    author: 'Carl Sagan',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1733592688532-97c9e14d0e55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25vbXklMjBjb3Ntb3MlMjBib29rfGVufDF8fHx8MTc2ODYxNzk5MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An exploration of the universe and our place in it, covering astronomy, biology, and the evolution of consciousness.',
    available: true,
    isbn: '978-0-345-53943-4'
  },
  {
    id: '9',
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1658708826253-9e4180272def?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYW5lJTIwYXVzdGVuJTIwYm9va3xlbnwxfHx8fDE3Njg2MTc5OTF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A romantic novel of manners set in Georgian England, following Elizabeth Bennet as she navigates issues of morality and marriage.',
    available: false,
    isbn: '978-0-14-143951-8'
  },
  {
    id: '10',
    title: 'The History of the Ancient World',
    author: 'Susan Wise Bauer',
    genre: 'History',
    coverImage: 'https://images.unsplash.com/photo-1646841922981-993dd45097ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGhpc3RvcnklMjBib29rfGVufDF8fHx8MTc2ODYxNzk5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'From the earliest accounts to the fall of Rome, a comprehensive narrative history of ancient civilizations.',
    available: true,
    isbn: '978-0-393-05974-8'
  },
  {
    id: '11',
    title: 'The Origin of Species',
    author: 'Charles Darwin',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1655809577184-2fb7085a7fd8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXJ3aW4lMjBldm9sdXRpb24lMjBib29rfGVufDF8fHx8MTc2ODYxNzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The foundation of evolutionary biology introducing the scientific theory that populations evolve through natural selection.',
    available: true,
    isbn: '978-0-14-043205-0'
  },
  {
    id: '12',
    title: 'The Catcher in the Rye',
    author: 'J.D. Salinger',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1760120482171-d9d5468f75fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjbGFzc2ljJTIwbGl0ZXJhdHVyZSUyMGJvb2t8ZW58MXx8fHwxNzY4NTc1NjYyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A story of teenage rebellion and alienation following Holden Caulfield through New York City over several days.',
    available: true,
    isbn: '978-0-316-76948-0'
  },
  {
    id: '13',
    title: 'Harry Potter and the Philosopher\'s Stone',
    author: 'J.K. Rowling',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1626618012641-bfbca5a31239?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXJyeSUyMHBvdHRlciUyMGJvb2t8ZW58MXx8fHwxNzY4NjE2NDg4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The first novel in the Harry Potter series, introducing a young wizard discovering his magical heritage and destiny.',
    available: true,
    isbn: '978-0-439-70818-8'
  },
  {
    id: '14',
    title: 'The Lord of the Rings',
    author: 'J.R.R. Tolkien',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1767219077120-1aa6d2398717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsb3JkJTIwcmluZ3MlMjBib29rfGVufDF8fHx8MTc2ODYxNzk5Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'An epic high fantasy adventure following the quest to destroy the One Ring and defeat the Dark Lord Sauron.',
    available: false,
    isbn: '978-0-618-64561-5'
  },
  {
    id: '15',
    title: 'The Adventures of Sherlock Holmes',
    author: 'Arthur Conan Doyle',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1731027254637-8fa4b997f6d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGVybG9jayUyMGhvbG1lcyUyMGJvb2t8ZW58MXx8fHwxNzY4NjE3OTkyfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A collection of twelve short stories featuring the brilliant detective Sherlock Holmes and his loyal friend Dr. Watson.',
    available: true,
    isbn: '978-0-14-062342-2'
  },
  {
    id: '16',
    title: 'Brave New World',
    author: 'Aldous Huxley',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1505162044372-bb9407b2cb15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmF2ZSUyMG5ldyUyMHdvcmxkfGVufDF8fHx8MTc2ODYxNzk5M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A dystopian novel set in a futuristic World State, exploring themes of technology, control, and the loss of individuality.',
    available: true,
    isbn: '978-0-06-085052-4'
  },
  {
    id: '17',
    title: 'Introduction to Quantum Mechanics',
    author: 'David J. Griffiths',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1740560051629-72ed4b99af18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxxdWFudHVtJTIwbWVjaGFuaWNzJTIwcGh5c2ljcyUyMHRleHRib29rfGVufDF8fHx8MTc2ODcxMTk2OHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A comprehensive textbook covering the fundamental principles of quantum mechanics for undergraduate students.',
    available: true,
    isbn: '978-1-107-17986-8'
  },
  {
    id: '18',
    title: 'Organic Chemistry',
    author: 'Paula Yurkanis Bruice',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1758876569703-ea9b21463691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGVtaXN0cnklMjBsYWJvcmF0b3J5JTIwYm9va3xlbnwxfHx8fDE3Njg2MTc5OTR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A student-friendly textbook on organic chemistry, covering structure, reactivity, and synthesis of organic compounds.',
    available: false,
    isbn: '978-0-134-04216-6'
  },
  {
    id: '19',
    title: 'A People\'s History of the United States',
    author: 'Howard Zinn',
    genre: 'History',
    coverImage: 'https://images.unsplash.com/photo-1645821522589-679978f019ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbWVyaWNhbiUyMGhpc3RvcnklMjBib29rfGVufDF8fHx8MTc2ODYxNzk5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'American history told from the perspective of marginalized groups, challenging traditional historical narratives.',
    available: true,
    isbn: '978-0-06-083865-2'
  },
  {
    id: '20',
    title: 'The Name of the Wind',
    author: 'Patrick Rothfuss',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1711185892188-13f35959d3ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYW50YXN5JTIwbm92ZWwlMjBib29rfGVufDF8fHx8MTc2ODYxNzk5NXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A fantasy novel following Kvothe, a legendary figure recounting his journey from a traveling performer to a notorious wizard.',
    available: true,
    isbn: '978-0-7564-0407-9'
  },
  {
    id: '21',
    title: 'Gone Girl',
    author: 'Gillian Flynn',
    genre: 'Fiction',
    coverImage: 'https://images.unsplash.com/photo-1760696473709-a7da66ee87a6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxteXN0ZXJ5JTIwdGhyaWxsZXIlMjBib29rfGVufDF8fHx8MTc2ODYxNzk5Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A psychological thriller about a marriage gone dangerously wrong when a wife disappears on her anniversary.',
    available: false,
    isbn: '978-0-307-58836-4'
  },
  {
    id: '22',
    title: 'Campbell Biology',
    author: 'Jane B. Reece',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1484172555456-bfd1451460cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxiaW9sb2d5JTIwdGV4dGJvb2t8ZW58MXx8fHwxNzY4NTI1MzQ1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The leading textbook for introductory biology courses, covering evolution, ecology, and molecular biology.',
    available: true,
    isbn: '978-0-321-55823-7'
  },
  {
    id: '23',
    title: 'Calculus: Early Transcendentals',
    author: 'James Stewart',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1560785472-2f186f554644?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXRoZW1hdGljcyUyMGJvb2slMjBlcXVhdGlvbnN8ZW58MXx8fHwxNzY4NjE3OTk3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'A comprehensive calculus textbook focusing on understanding concepts through examples and applications.',
    available: true,
    isbn: '978-1-285-74155-0'
  },
  {
    id: '24',
    title: 'Introduction to Algorithms',
    author: 'Thomas H. Cormen',
    genre: 'Science',
    coverImage: 'https://images.unsplash.com/photo-1624953587687-daf255b6b80a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21wdXRlciUyMHNjaWVuY2UlMjBwcm9ncmFtbWluZ3xlbnwxfHx8fDE3Njg1NTM4OTB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'The definitive computer science textbook covering algorithms, data structures, and computational complexity.',
    available: false,
    isbn: '978-0-262-03384-8'
  },
  {
    id: '25',
    title: 'Data Structures and Algorithms in Java',
    author: 'Robert Lafore',
    genre: 'Engineering',
    coverImage: 'https://images.unsplash.com/photo-1664854953181-b12e6dda8b7c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc3RydWN0dXJlcyUyMGFsZ29yaXRobXMlMjB0ZXh0Ym9va3xlbnwxfHx8fDE3Njg2NjE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A comprehensive guide to data structures and algorithms using Java, featuring clear explanations and practical examples for computer science students.',
    available: true,
    isbn: '978-0-672-32453-6'
  },
  {
    id: '26',
    title: 'Core Java Volume I - Fundamentals',
    author: 'Cay S. Horstmann',
    genre: 'Engineering',
    coverImage: 'https://images.unsplash.com/photo-1581019055756-93b5361f9536?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXZhJTIwcHJvZ3JhbW1pbmclMjB0ZXh0Ym9va3xlbnwxfHx8fDE3Njg2NjE3MDV8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The definitive guide to Java programming covering fundamentals, object-oriented programming, and core Java APIs for beginners and intermediate developers.',
    available: true,
    isbn: '978-0-13-516630-7'
  },
  {
    id: '27',
    title: 'Python Crash Course',
    author: 'Eric Matthes',
    genre: 'Engineering',
    coverImage: 'https://images.unsplash.com/photo-1580121441575-41bcb5c6b47c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxweXRob24lMjBwcm9ncmFtbWluZyUyMGJvb2t8ZW58MXx8fHwxNzY4NzExOTY4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A hands-on, project-based introduction to Python programming covering basics, data structures, and practical applications with real-world projects.',
    available: false,
    isbn: '978-1-59327-928-8'
  },
  {
    id: '28',
    title: 'Web Development with HTML, CSS & JavaScript',
    author: 'Jon Duckett',
    genre: 'Engineering',
    coverImage: 'https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2dyYW1taW5nfGVufDF8fHx8MTc2ODUzNDc5Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'A comprehensive guide to modern web development covering HTML5, CSS3, and JavaScript with responsive design principles and interactive examples.',
    available: true,
    isbn: '978-1-118-87165-2'
  },
  {
    id: '29',
    title: 'Applied Cryptography',
    author: 'Bruce Schneier',
    genre: 'Engineering',
    coverImage: 'https://images.unsplash.com/photo-1650035422416-b304ab1ada47?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcnlwdG9ncmFwaHklMjBzZWN1cml0eSUyMHRleHRib29rfGVufDF8fHx8MTc2ODY2MTcwNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'The definitive textbook on cryptography covering encryption algorithms, protocols, security systems, and practical cryptographic implementations.',
    available: true,
    isbn: '978-1-119-09672-6'
  }
];