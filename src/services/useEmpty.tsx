import { useQuery } from '@tanstack/react-query';

export const useEmpty = () => {
  return useQuery({ queryKey: ['empty'], queryFn: () => {} });
};
