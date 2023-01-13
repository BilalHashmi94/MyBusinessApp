import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Colors, Metrix, NavigationService} from './src/config';
import {ActivityIndicator, View} from 'react-native';
import {connect, useSelector} from 'react-redux';
import Home from './src/screens/Home';
import AllItems from './src/screens/AllItems';
import SoldItems from './src/screens/SoldItems';
import MyRevenue from './src/screens/MyRevenue';
import BottomTabs from './src/components/BottomTabs';

const Stack = createStackNavigator();

class AppNavigation extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const loading = useSelector(state => state.LoaderReducer.loading);
    let {loading, user} = this.props;
    return (
      <>
        <NavigationContainer
          ref={ref => NavigationService.setTopLevelNavigator(ref)}>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={user ? 'BottomTabs' : 'BottomTabs'}>
            <Stack.Screen name="BottomTabs" component={BottomTabs} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="AllItems" component={AllItems} />
            <Stack.Screen name="SoldItems" component={SoldItems} />
            <Stack.Screen name="MyRevenue" component={MyRevenue} />
          </Stack.Navigator>
        </NavigationContainer>
        {loading && (
          <View
            style={{
              height: Metrix.VerticalSize(),
              width: Metrix.HorizontalSize(),
              position: 'absolute',
              zIndex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View
              style={{
                paddingHorizontal: Metrix.VerticalSize(30),
                paddingVertical: Metrix.VerticalSize(30),
                borderRadius: Metrix.VerticalSize(10),
                backgroundColor: Colors.primary,
              }}>
              <ActivityIndicator size="large" color={Colors.white} />
            </View>
          </View>
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  loading: state.LoaderReducer.loading,
  user: state.AuthReducer.user,
});
const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(AppNavigation);
