import React from 'react';
import {View, Image} from 'react-native';
import styles from './styles';
import StepCurrent from '../../images/stepcurrent.png';
import StepDone from '../../images/stepdone.png';
import StepNext from '../../images/stepnext.png';

const bgColor = "#0069FF";
const lineNext = "#FFF";
const lineDone = "#004FC0";

const Steps = ({step, totalSteps}) => {
   
    return (
        <View backgroundColor={bgColor} style={styles.navigator}>           
            {[...Array(totalSteps - 1)].map((e,i) => {
              return (
                <React.Fragment key={i}>
                    <Image
                        source={i + 1 < step ? StepDone : i + 1 == step ? StepCurrent : StepNext}
                        style={styles.stepIcon}
                        resizeMode="contain"               
                    />
                    <View style={styles.lineSteps} backgroundColor={i + 1 <= step -1 ? lineDone : lineNext} ></View>
                </React.Fragment>
              )
            })} 
            <Image 
                style={styles.stepIcon}
                resizeMode="contain"
                source={step == totalSteps ? StepCurrent : step > totalSteps ? StepDone : StepNext}
            />
        </View>
    );
};

export default Steps;
