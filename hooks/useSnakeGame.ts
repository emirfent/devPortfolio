'use client'
import { useState, useEffect, useCallback } from 'react'
import { GameState, GameConfig, Position } from '@/types'

const GAME_CONFIG: GameConfig = {
  GRID_SIZE: 15,
  INITIAL_SNAKE: [{ x: 5, y: 7 }, { x: 4, y: 7 }, { x: 3, y: 7 }],
  INITIAL_FOOD: { x: 10, y: 5 },
  INITIAL_DIRECTION: { x: 1, y: 0 },
  MAX_FOOD: 15,
  MIN_SPEED: 70,
  SPEED_DECREASE: 4
}

export function useSnakeGame() {
  const [snake, setSnake] = useState<Position[]>(GAME_CONFIG.INITIAL_SNAKE)
  const [food, setFood] = useState<Position>(GAME_CONFIG.INITIAL_FOOD)
  const [direction, setDirection] = useState<Position>(GAME_CONFIG.INITIAL_DIRECTION)
  const [gameRunning, setGameRunning] = useState(false)
  const [gameOver, setGameOver] = useState(false)
  const [gameWon, setGameWon] = useState(false)
  const [score, setScore] = useState(0)
  const [foodCount, setFoodCount] = useState(GAME_CONFIG.MAX_FOOD)
  const [gameSpeed, setGameSpeed] = useState(120)

  // Generate random food position
  const generateFood = useCallback((): Position => {
    let newFood: Position
    do {
      newFood = {
        x: Math.floor(Math.random() * GAME_CONFIG.GRID_SIZE),
        y: Math.floor(Math.random() * GAME_CONFIG.GRID_SIZE)
      }
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y))
    return newFood
  }, [snake])

  // Move snake
  const moveSnake = useCallback(() => {
    if (!gameRunning || gameOver || gameWon) return

    setSnake(currentSnake => {
      const newSnake = [...currentSnake]
      const head = { ...newSnake[0] }
      
      head.x += direction.x
      head.y += direction.y
      
      // Check wall collision
      if (head.x < 0 || head.x >= GAME_CONFIG.GRID_SIZE || head.y < 0 || head.y >= GAME_CONFIG.GRID_SIZE) {
        setGameOver(true)
        setGameRunning(false)
        return currentSnake
      }
      
      // Check self collision
      if (newSnake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setGameOver(true)
        setGameRunning(false)
        return currentSnake
      }
      
      newSnake.unshift(head)
      
      // Check food collision
      if (head.x === food.x && head.y === food.y) {
        const newScore = score + 1
        const newFoodCount = foodCount - 1
        
        setScore(newScore)
        setFoodCount(newFoodCount)
        
        // Increase game speed (make it faster)
        const newSpeed = Math.max(GAME_CONFIG.MIN_SPEED, gameSpeed - GAME_CONFIG.SPEED_DECREASE)
        setGameSpeed(newSpeed)
        
        // Check win condition
        if (newScore >= GAME_CONFIG.MAX_FOOD) {
          setGameWon(true)
          setGameRunning(false)
        } else {
          setFood(generateFood())
        }
      } else {
        newSnake.pop()
      }
      
      return newSnake
    })
  }, [direction, food, gameRunning, gameOver, gameWon, generateFood, score, foodCount, gameSpeed])

  // Keyboard controls
  const handleKeyPress = useCallback((e: KeyboardEvent) => {
    if (!gameRunning) return
    
    switch (e.key) {
      case 'ArrowUp':
        if (direction.y === 0) setDirection({ x: 0, y: -1 })
        break
      case 'ArrowDown':
        if (direction.y === 0) setDirection({ x: 0, y: 1 })
        break
      case 'ArrowLeft':
        if (direction.x === 0) setDirection({ x: -1, y: 0 })
        break
      case 'ArrowRight':
        if (direction.x === 0) setDirection({ x: 1, y: 0 })
        break
    }
  }, [direction, gameRunning])

  // Start game
  const startGame = () => {
    setSnake(GAME_CONFIG.INITIAL_SNAKE)
    setFood(GAME_CONFIG.INITIAL_FOOD)
    setDirection(GAME_CONFIG.INITIAL_DIRECTION)
    setGameRunning(true)
    setGameOver(false)
    setGameWon(false)
    setScore(0)
    setFoodCount(GAME_CONFIG.MAX_FOOD)
    setGameSpeed(120)
  }

  // Reset game
  const resetGame = () => {
    setGameRunning(false)
    setGameOver(false)
    setGameWon(false)
    setSnake(GAME_CONFIG.INITIAL_SNAKE)
    setFood(GAME_CONFIG.INITIAL_FOOD)
    setDirection(GAME_CONFIG.INITIAL_DIRECTION)
    setScore(0)
    setFoodCount(GAME_CONFIG.MAX_FOOD)
    setGameSpeed(120)
  }

  // Game loop
  useEffect(() => {
    const gameLoop = setInterval(moveSnake, gameSpeed)
    return () => clearInterval(gameLoop)
  }, [moveSnake, gameSpeed])

  // Keyboard event listener
  useEffect(() => {
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [handleKeyPress])

  const gameState: GameState = {
    snake,
    food,
    direction,
    gameRunning,
    gameOver,
    gameWon,
    score,
    foodCount,
    gameSpeed
  }

  return {
    gameState,
    gameConfig: GAME_CONFIG,
    gameActions: {
      startGame,
      resetGame,
      generateFood
    }
  }
}

