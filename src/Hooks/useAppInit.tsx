import React, { useEffect } from 'react';
import Api from '../Services/Api';

const useAppInit = () => {
  Api.init();
};
export default useAppInit;
