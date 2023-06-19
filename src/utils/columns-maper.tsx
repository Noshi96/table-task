type MapperType = {
  [key: string]: string;
};

export const columnsMapper = (columnName: string) => {
  const mapper: MapperType = {
    id: 'ID',
    authors: 'Author',
    language: 'Language',
    title: 'Title',
    categories: 'Genre',
    isbn: 'ISBN',
  };

  return mapper[columnName] || '';
};
