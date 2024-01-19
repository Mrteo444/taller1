import * as React from 'react';
import { StyleSheet, View, Text, Button, ImageBackground } from 'react-native';
import { gameReducer } from '../reducers/gameReducer';
import { createBoard } from '../utils/createBoard';
import Cell from './Cell';

const BOARD_SIZE = 10;
const BOMBS_NUM = 10;

export default function Board() {
  const [gameState, dispatch] = React.useReducer(gameReducer, {
    board: createBoard(BOARD_SIZE, BOARD_SIZE, BOMBS_NUM),
    isGameOver: false,
    numOfOpenCells: 0,
  });

  function handlePress(row, col) {
    dispatch({ type: 'HANDLE_CELL', row, col });
  }

  function handleRestart() {
    dispatch({ type: 'RESTART_GAME' });
  }

  return (
<ImageBackground
      source={{ uri: 'https://www.wallpaperuse.com/wallp/27-270227_m.jpg' }}
      style={styles.container}
    >
      <Text style={styles.text }>
        {gameState.isGameOver ? 'Acabas de perder' : 'Buscaminas'}
      </Text>
      {gameState.board.map((row, rowIdx) => (
        <View key={rowIdx} style={styles.row}>
          {row.map((cell, cellIdx) => (
            <Cell key={cellIdx} handlePress={handlePress} {...cell} />
          ))}
        </View>
      ))}
      <Button title="Intentalo de nuevo
      " onPress={handleRestart} />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  row: {
    color: 'white',
    flexDirection: 'row',
  },
  text: {
    color:'white',
    fontWeight: '900',
    fontSize: 32,
  },
});
