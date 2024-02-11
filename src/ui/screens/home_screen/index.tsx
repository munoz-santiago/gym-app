import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ProfileTab from './tabs/profile';
import WorkoutTab from './tabs/workout';
import { MaterialIcons } from '@expo/vector-icons';
import SafeArea from '../../components/SafeArea';

const Tab = createBottomTabNavigator();

enum HomeScreenTabs {
    profile = 'profile',
    workout = 'workout',
    anotherTab = 'anotherTab',
}

const tabs = [
    { id: HomeScreenTabs.profile, iconName: 'person', screen: ProfileTab },
    { id: HomeScreenTabs.workout, iconName: 'sports-gymnastics', screen: WorkoutTab },
    { id: HomeScreenTabs.anotherTab, iconName: 'cancel', screen: WorkoutTab },
];

const HomeScreen = ({ navigation }: any) => {
    return (
        <SafeArea>
            <Tab.Navigator initialRouteName={HomeScreenTabs.workout}>
                {tabs.map((tab) => (
                    <Tab.Screen
                        key={tab.id}
                        name={tab.id}
                        component={tab.screen}
                        options={{
                            tabBarIcon: () => <MaterialIcons name={tab.iconName as any} size={24} color="gray" />,
                            headerShown: false,
                        }}
                    />
                ))}
            </Tab.Navigator>
        </SafeArea>
    );
};

export default HomeScreen;
