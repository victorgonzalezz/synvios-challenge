import { NavigationActions, NavigationNavigateActionPayload } from 'react-navigation';

let navigator: any;

function setNavigator(ref: string) {
  navigator = ref;
}

function navigate(routeName: string, params: NavigationNavigateActionPayload) {
  navigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}

export default {
  navigate,
  setNavigator,
};