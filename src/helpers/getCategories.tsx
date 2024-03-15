import { CategoryOptions } from '../interfaces';

export const getCategories = (): Array<CategoryOptions> => {
  return [
    {
      id: 'movies',
      name: 'Movies',
      valid: true,
    },
    {
      id: 'music_bands',
      name: 'Music bands',
      valid: false,
    },
    {
      id: 'video_games',
      name: 'Video games',
      valid: false,
    },
    {
      id: 'cities_to_visit',
      name: 'Cities to visit',
      valid: false,
    },
    {
      id: 'netflix_series',
      name: 'Netflix series',
      valid: false,
    },
  ];
};
