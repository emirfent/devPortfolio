'use client'
import Icon from '@/components/Icon'
import { useSnakeGame } from '@/hooks/useSnakeGame'

export default function SnakeGame() {
  const { gameState, gameConfig, gameActions } = useSnakeGame()
  const { snake, food, gameRunning, gameOver, gameWon, score, foodCount } = gameState
  const { GRID_SIZE } = gameConfig
  const { startGame, resetGame } = gameActions

  // Grid calculations for perfect alignment
  const GAME_SIZE = 320; // Game area size in pixels
  const CELL_SIZE = GAME_SIZE / GRID_SIZE; // Each cell size (~21.33px)
  const ELEMENT_SIZE = CELL_SIZE * 0.65; // Element size (65% of cell - smaller for better spacing)
  const OFFSET = (CELL_SIZE - ELEMENT_SIZE) / 2; // Centering offset

  return (
    <div className="hidden xl:block flex-shrink-0 animate-fadeInUp [animation-delay:0.3s]" role="region" aria-label="Snake Game">
      <div className="bg-gradient-to-br from-teal-500/20 via-blue-500/15 to-purple-500/20 p-6 rounded-2xl shadow-2xl backdrop-blur-sm border border-teal-400/20">
        {/* Game Area */}
        <div className="bg-gradient-to-br from-gray-900/95 via-gray-800/90 to-gray-900/95 rounded-xl p-4 mb-4 relative border border-cyan-500/20 shadow-lg">
          <div className="w-80 h-80 bg-gradient-to-br from-gray-900/95 via-gray-800/95 to-gray-900/90 rounded-lg border-2 border-cyan-400/30 relative overflow-hidden shadow-inner">
            {/* Grid pattern background - 15x15 perfect grid */}
            <div 
              className="absolute inset-0 opacity-15"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(0, 255, 247, 0.4) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(0, 255, 247, 0.4) 1px, transparent 1px)
                `,
                backgroundSize: `${CELL_SIZE}px ${CELL_SIZE}px`
              }}
            />
            {/* Score */}
            <div className="absolute top-3 left-3 text-teal-400 font-mono text-sm z-10 bg-gray-900/80 px-2 py-1 rounded backdrop-blur-sm">
              Score: {score}
            </div>
            
            {/* Game Over Modal */}
            {gameOver && (
              <div className="absolute inset-0 bg-gray-900/95 flex items-center justify-center z-50 backdrop-blur-md">
                <div className="text-center bg-gradient-to-br from-gray-800/95 to-gray-900/95 p-6 rounded-xl border border-red-500/30 shadow-2xl">
                  <div className="text-red-400 font-mono text-lg mb-2 flex items-center justify-center gap-2">
                    <span className="text-2xl">💀</span>
                    Game Over!
                  </div>
                  <div className="text-gray-300 font-mono text-sm mb-4">Final Score: {score}/15</div>
                                <button 
                onClick={startGame}
                className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-400 hover:to-orange-500 text-white px-6 py-3 rounded-lg font-mono font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-orange-400/50"
                aria-label="Oyunu yeniden başlat"
              >
                    <span className="flex items-center gap-2">
                      <Icon name="ri-play-fill" className="w-4 h-4"/>
                      Play Again
                    </span>
                  </button>
                </div>
              </div>
            )}

            {/* You Won Modal */}
            {gameWon && (
              <div className="absolute inset-0 bg-gray-900/95 flex items-center justify-center z-50 backdrop-blur-md">
                <div className="text-center bg-gradient-to-br from-gray-800/95 to-gray-900/95 p-6 rounded-xl border border-teal-400/40 shadow-2xl">
                  <div className="text-teal-400 font-mono text-xl mb-3 flex items-center justify-center gap-2">
                    <span className="text-3xl">🏆</span>
                    Victory!
                  </div>
                  <div className="text-yellow-300 font-mono text-sm mb-1">Perfect Score!</div>
                  <div className="text-gray-300 font-mono text-sm mb-4">15/15 Food Collected</div>
                                <button 
                onClick={startGame}
                className="bg-gradient-to-r from-teal-500 to-cyan-600 hover:from-teal-400 hover:to-cyan-500 text-white px-6 py-3 rounded-lg font-mono font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-teal-400/50"
                aria-label="Kazandın! Yeniden oyna"
              >
                    <span className="flex items-center gap-2">
                      <Icon name="ri-restart-line" className="w-4 h-4"/>
                      Play Again
                    </span>
                  </button>
                </div>
              </div>
            )}
            
            {/* Snake segments - Grid-aligned positioning */}
            {snake.map((segment, index) => {
              const isHead = index === 0;
              const opacity = Math.max(0.4, 1 - (index * 0.12)); // Daha yumuşak gradient
              const segmentSize = isHead ? ELEMENT_SIZE * 1.15 : ELEMENT_SIZE; // Head slightly bigger
              const segmentOffset = (CELL_SIZE - segmentSize) / 2; // Recalculate offset for head
              
              return (
                <div
                  key={index}
                  className="absolute transition-all duration-100 ease-out"
                  style={{
                    left: `${segment.x * CELL_SIZE + segmentOffset}px`,
                    top: `${segment.y * CELL_SIZE + segmentOffset}px`,
                    width: `${segmentSize}px`,
                    height: `${segmentSize}px`,
                    background: isHead 
                      ? `linear-gradient(135deg, #00fff7, #00d4ff, #0ea5e9)` // Head: 3-color gradient
                      : `linear-gradient(135deg, rgba(0, 255, 247, ${opacity}), rgba(0, 212, 255, ${opacity * 0.9}))`, // Body: Smoother fade
                    borderRadius: '3px',
                    boxShadow: isHead 
                      ? `0 0 8px rgba(0, 255, 247, 0.8), 0 0 16px rgba(0, 212, 255, 0.4), inset 0 1px 2px rgba(255, 255, 255, 0.3)` // Enhanced static glow
                      : `0 0 3px rgba(0, 255, 247, ${opacity * 0.4})`, // Softer body glow
                  }}
                >
                  {/* İç parlama efekti - Sadece static */}
                  <div 
                    className="absolute inset-0 rounded-sm"
                    style={{
                      background: isHead 
                        ? `radial-gradient(ellipse at 25% 25%, rgba(255, 255, 255, 0.6), rgba(0, 255, 247, 0.2) 40%, transparent 70%)`
                        : `radial-gradient(circle at center, rgba(255, 255, 255, ${opacity * 0.25}), transparent 70%)`,
                    }}
                  />
                  
                  {/* Kafa için subtle pulsing glow */}
                  {isHead && (
                    <div 
                      className="absolute inset-0 rounded-sm animate-pulse"
                      style={{
                        background: `radial-gradient(circle at center, rgba(0, 255, 247, 0.4), transparent 70%)`,
                        animationDuration: '3s'
                      }}
                    />
                  )}
                </div>
              );
            })}
            
            {/* Food - Grid-aligned positioning */}
            <div 
              className="absolute rounded-full"
              style={{
                left: `${food.x * CELL_SIZE + OFFSET}px`,
                top: `${food.y * CELL_SIZE + OFFSET}px`,
                width: `${ELEMENT_SIZE}px`,
                height: `${ELEMENT_SIZE}px`,
                background: `radial-gradient(circle, #ff6b00, #ff8500, #e67300)`,
                boxShadow: `0 0 8px rgba(255, 107, 0, 0.7), 0 0 16px rgba(255, 133, 0, 0.3)`,
                animation: 'foodPulse 2s ease-in-out infinite'
              }}
            >
              {/* Yem iç parlama */}
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: `radial-gradient(ellipse at 25% 25%, rgba(255, 255, 255, 0.7), rgba(255, 200, 100, 0.3) 40%, transparent 70%)`,
                }}
              />
              {/* Rotating ring effect */}
              <div 
                className="absolute inset-0 rounded-full border border-orange-300/40"
                style={{
                  animation: 'spin 3s linear infinite'
                }}
              />
            </div>
            
            {/* Start button */}
            {!gameRunning && !gameOver && !gameWon && (
              <button 
                onClick={startGame}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-400 hover:to-emerald-500 text-white px-8 py-3 rounded-xl font-mono font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 border border-green-400/50 z-20"
                aria-label="Snake oyununu başlat"
              >
                <span className="flex items-center gap-2">
                  <Icon name="ri-play-fill" className="w-5 h-5"/>
                  Start Game
                </span>
              </button>
            )}
          </div>
        </div>
        
        {/* Controls and Info */}
        <div className="grid grid-cols-2 gap-4">
          {/* Controls */}
          <div className="bg-gray-900/60 px-3 py-3 rounded-lg border border-gray-700/40 text-gray-300">
            <div className="text-gray-400 font-mono text-xs mb-2">{`// use keyboard`}</div>
            <div className="grid grid-cols-3 gap-1 text-xs">
              <div></div>
              <div className="bg-gray-700/70 p-1 rounded text-center font-mono flex items-center justify-center">
                <Icon name="ri-arrow-up-line" className="text-xs text-teal-400"/>
              </div>
              <div></div>
              <div className="bg-gray-700/70 p-1 rounded text-center font-mono flex items-center justify-center">
                <Icon name="ri-arrow-left-line" className="text-xs text-teal-400"/>
              </div>
              <div className="bg-gray-700/70 p-1 rounded text-center font-mono flex items-center justify-center">
                <Icon name="ri-arrow-down-line" className="text-xs text-teal-400"/>
              </div>
              <div className="bg-gray-700/70 p-1 rounded text-center font-mono flex items-center justify-center">
                <Icon name="ri-arrow-right-line" className="text-xs text-teal-400"/>
              </div>
            </div>
          </div>
          
          {/* Food left */}
          <div className="bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-gray-900/80 px-3 py-3 rounded-lg border border-orange-400/30 text-gray-300 shadow-lg">
            <div className="text-orange-300 font-mono text-xs mb-2 flex items-center gap-1">
              <span className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></span>
              food left: {foodCount}
            </div>
            <div className="grid grid-cols-5 gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    i < foodCount 
                      ? 'bg-gradient-to-br from-orange-400 to-orange-500 shadow-sm' 
                      : 'bg-gray-700 border border-gray-600'
                  }`}
                  style={i < foodCount ? {
                    boxShadow: '0 0 4px rgba(255, 165, 0, 0.5)',
                    animation: `foodBlink ${1 + (i * 0.1)}s ease-in-out infinite alternate`
                  } : {}}
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-1 mb-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i + 5} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    (i + 5) < foodCount 
                      ? 'bg-gradient-to-br from-orange-400 to-orange-500 shadow-sm' 
                      : 'bg-gray-700 border border-gray-600'
                  }`}
                  style={(i + 5) < foodCount ? {
                    boxShadow: '0 0 4px rgba(255, 165, 0, 0.5)',
                    animation: `foodBlink ${1 + ((i + 5) * 0.1)}s ease-in-out infinite alternate`
                  } : {}}
                ></div>
              ))}
            </div>
            <div className="grid grid-cols-5 gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <div 
                  key={i + 10} 
                  className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                    (i + 10) < foodCount 
                      ? 'bg-gradient-to-br from-orange-400 to-orange-500 shadow-sm' 
                      : 'bg-gray-700 border border-gray-600'
                  }`}
                  style={(i + 10) < foodCount ? {
                    boxShadow: '0 0 4px rgba(255, 165, 0, 0.5)',
                    animation: `foodBlink ${1 + ((i + 10) * 0.1)}s ease-in-out infinite alternate`
                  } : {}}
                ></div>
              ))}
            </div>
            
            {/* Game status */}
            <div className="text-center mb-2">
              <div className="text-gray-400 font-mono text-xs">
                {gameRunning ? `${score}/15 Food` : gameWon ? 'You Won!' : gameOver ? 'Game Over' : 'Press Start'}
              </div>
            </div>
            
            {/* Reset button */}
            <button 
              onClick={resetGame}
              className="w-full bg-gradient-to-r from-gray-700/80 to-gray-600/80 hover:from-red-600/80 hover:to-red-500/80 text-gray-300 hover:text-white px-3 py-1.5 rounded-md text-xs font-mono transition-all duration-300 border border-gray-600 hover:border-red-400/50 shadow-sm hover:shadow-md hover:scale-105"
              aria-label="Oyunu sıfırla"
            >
              <span className="flex items-center justify-center gap-1">
                <Icon name="ri-refresh-line" className="w-3 h-3"/>
                reset
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}