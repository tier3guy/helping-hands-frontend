
// Icons
// import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

const Icon = (props) => {
    const { name } = props;

    switch(name){
        case 'eye':
            return <Feather {...props} />;
        case 'user':
            return <Feather {...props} />;
        case 'lock':
            return <Feather {...props} />;
        case 'email':
            return <MaterialIcons {...props} />;
        case 'alternate-email':
            return <MaterialIcons {...props} />;
        case 'paper-plane':
            return <Entypo {...props} />;
        case 'person':
            return <Octicons {...props} />;
        case 'logout':
            return <AntDesign {...props} />;
        case 'bell':
            return <Octicons {...props} />;
        case 'bell-slash':
            return <Octicons {...props} />;
        default:
            return <Feather {...props} />;
    }
};

export default Icon;