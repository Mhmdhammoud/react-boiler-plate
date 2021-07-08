import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppState } from '../reducers';

export interface IRoutProps {
  component: React.FC;
  isPrivate: boolean;
  exact: boolean;
  path: string;
}

const RouteWrapper = ({ component, isPrivate, ...props }: IRoutProps) => {
  const { isAuthenticated } = useSelector((state: AppState) => state.auth);
  if (!isAuthenticated) {
    return <Redirect to="/login" />;
  } else {
    return <Route {...props} component={component} />;
  }
};

export default RouteWrapper;
