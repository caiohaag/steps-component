import {
    StyleSheet
} from 'react-native';

const styles = StyleSheet.create({
    navigator: {        
        width: '100%',      
        display: 'flex',  
        flexDirection: 'row',       
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,        
        paddingBottom: 15,
        paddingHorizontal: 40
    },  
    lineSteps: {
        flexGrow: 1,
        height: 1,               
    },
    stepIcon: {
        width: 20,
        height: 20
    }
});

export default styles;