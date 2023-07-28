/* eslint-disable prettier/prettier */
import axios from 'axios';

export const deleteFood = async id => {
  try {
    await axios.delete(`http://10.0.2.2:4000/food_delete/${id}`);
    // alert('delete succes');
    // window.location.reload();
    // console.log('succes');
  } catch (error) {
    console.log(error);
  }
};
