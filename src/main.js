import {
  getExerciseById,
  getExercises,
  getMusclesList,
  getQuoteOfTheDay,
  setExerciseRating,
} from './services/api/api';

const test = async () => {
  try {
    // const res = await getMusclesList();
    // const res = await getQuoteOfTheDay();
    // const res = await getExercises(
    //   {
    //     bodypart: 'waist',
    //     muscles: '',
    //     equipment: '',
    //     search: '',
    //   },
    //   3
    // );

    // const res = await getExerciseById('64f389465ae26083f39b17a2');

    // const res = await setExerciseRating('64f389465ae26083f39b17a2', {
    //   rate: 5,
    //   email: 'anton_ce@gmail.com',
    //   review: 'My best exercise',
    // });

    console.log('res', res);
  } catch (err) {
    console.log('err', err);
  }
};

test();
