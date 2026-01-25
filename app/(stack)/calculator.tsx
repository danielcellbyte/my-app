import { useState } from 'react';
import { View, Text, StyleSheet, Pressable, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const BUTTON_SIZE = (width - 80) / 4;

export default function Calculator() {
  const [display, setDisplay] = useState('0');
  const [previousValue, setPreviousValue] = useState<string | null>(null);
  const [operator, setOperator] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputDigit = (digit: string) => {
    if (waitingForOperand) {
      setDisplay(digit);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === '0' ? digit : display + digit);
    }
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay('0.');
      setWaitingForOperand(false);
      return;
    }
    if (!display.includes('.')) {
      setDisplay(display + '.');
    }
  };

  const clear = () => {
    setDisplay('0');
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(false);
  };

  const toggleSign = () => {
    const value = parseFloat(display);
    setDisplay(String(value * -1));
  };

  const inputPercent = () => {
    const value = parseFloat(display);
    setDisplay(String(value / 100));
  };

  const performOperation = (nextOperator: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(String(inputValue));
    } else if (operator) {
      const currentValue = parseFloat(previousValue);
      let result: number;

      switch (operator) {
        case '+':
          result = currentValue + inputValue;
          break;
        case '-':
          result = currentValue - inputValue;
          break;
        case '×':
          result = currentValue * inputValue;
          break;
        case '÷':
          result = inputValue !== 0 ? currentValue / inputValue : 0;
          break;
        default:
          result = inputValue;
      }

      setDisplay(String(result));
      setPreviousValue(String(result));
    }

    setWaitingForOperand(true);
    setOperator(nextOperator);
  };

  const calculate = () => {
    if (!operator || previousValue === null) return;

    const inputValue = parseFloat(display);
    const currentValue = parseFloat(previousValue);
    let result: number;

    switch (operator) {
      case '+':
        result = currentValue + inputValue;
        break;
      case '-':
        result = currentValue - inputValue;
        break;
      case '×':
        result = currentValue * inputValue;
        break;
      case '÷':
        result = inputValue !== 0 ? currentValue / inputValue : 0;
        break;
      default:
        result = inputValue;
    }

    setDisplay(String(result));
    setPreviousValue(null);
    setOperator(null);
    setWaitingForOperand(true);
  };

  const renderButton = (
    label: string,
    onPress: () => void,
    style?: object,
    textStyle?: object
  ) => (
    <Pressable
      style={({ pressed }) => [
        styles.button,
        style,
        pressed && styles.buttonPressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, textStyle]}>{label}</Text>
    </Pressable>
  );

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <Text style={styles.display} numberOfLines={1} adjustsFontSizeToFit>
          {display}
        </Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.row}>
          {renderButton('C', clear, styles.functionButton, styles.functionText)}
          {renderButton('±', toggleSign, styles.functionButton, styles.functionText)}
          {renderButton('%', inputPercent, styles.functionButton, styles.functionText)}
          {renderButton('÷', () => performOperation('÷'), styles.operatorButton, styles.operatorText)}
        </View>

        <View style={styles.row}>
          {renderButton('7', () => inputDigit('7'))}
          {renderButton('8', () => inputDigit('8'))}
          {renderButton('9', () => inputDigit('9'))}
          {renderButton('×', () => performOperation('×'), styles.operatorButton, styles.operatorText)}
        </View>

        <View style={styles.row}>
          {renderButton('4', () => inputDigit('4'))}
          {renderButton('5', () => inputDigit('5'))}
          {renderButton('6', () => inputDigit('6'))}
          {renderButton('-', () => performOperation('-'), styles.operatorButton, styles.operatorText)}
        </View>

        <View style={styles.row}>
          {renderButton('1', () => inputDigit('1'))}
          {renderButton('2', () => inputDigit('2'))}
          {renderButton('3', () => inputDigit('3'))}
          {renderButton('+', () => performOperation('+'), styles.operatorButton, styles.operatorText)}
        </View>

        <View style={styles.row}>
          {renderButton('0', () => inputDigit('0'), styles.zeroButton)}
          {renderButton('.', inputDecimal)}
          {renderButton('=', calculate, styles.operatorButton, styles.operatorText)}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
    padding: 20,
  },
  displayContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  display: {
    color: '#fff',
    fontSize: 70,
    fontWeight: '300',
  },
  buttonContainer: {
    gap: 12,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: '#fff',
    fontSize: 32,
    fontWeight: '500',
  },
  functionButton: {
    backgroundColor: '#a5a5a5',
  },
  functionText: {
    color: '#000',
  },
  operatorButton: {
    backgroundColor: '#ff9500',
  },
  operatorText: {
    color: '#fff',
  },
  zeroButton: {
    width: BUTTON_SIZE * 2 + 12,
    borderRadius: BUTTON_SIZE / 2,
    alignItems: 'flex-start',
    paddingLeft: BUTTON_SIZE / 3,
  },
});
