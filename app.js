function gameBoard(){
    const blocks = document.querySelectorAll('.block');
    const whosTurn = document.querySelector('.whos-turn');
    const resetGame = document.querySelector('#reset-game');
    
    let currentPlayer = 'X';
    let board = ['', '', '', '', '', '', '', '', ''];
    let isGameActive = true;
    
    const playerXWins = "Player X Wins!";
    const playerOWins = "Player O Wins!";
    const tie = "TIE!";
  
    const youWin = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];
    
    function handleResultValidation(){
      let roundWin = false;
      for(let i=0; i<= 7; i++){
        const youreWinning = youWin[i];
        const a = board[youreWinning[0]];
        const b = board[youreWinning[1]];
        const c = board[youreWinning[2]];
        if (a === '' || b === '' || c === '') {
          continue;
        }
        if (a === b && b === c) {
          roundWin = true;
          break;
        }
      }
      
    if(roundWin){
      alert(currentPlayer === 'X' ? playerXWins : playerOWins);
      isGameActive = false;
      return;
      }
    if(!board.includes(''))
      alert(tie)
    }
  
    
    function validAction(block){
      if(block.innerText === 'X' || block.innerText === 'O'){
        return false;
      }
    
      return true;
    };
    
    
    function updateBoard(index){
      board[index] = currentPlayer;
    };
    
    
    function changePlayer(){
      whosTurn.classList.remove(currentPlayer);
      currentPlayer = currentPlayer === 'X' ? 'O': 'X';
      whosTurn.innerText = currentPlayer;
      whosTurn.classList.add(currentPlayer);
    }
    
    function userAction(block,index){
      if(validAction(block) && isGameActive){
        block.innerText = currentPlayer;
        block.classList.add(currentPlayer);
        updateBoard(index);
        handleResultValidation();
        changePlayer();
      }
    } 
  
    function resetButton(){
      isGameActive = true;
  
      if (currentPlayer === 'O') {
        changePlayer();
      }
  
      blocks.forEach(block => {
        block.innerText = '';
        block.classList.remove('playerX');
        block.classList.remove('playerO');
      });
    }
  
    blocks.forEach((block, index) =>{
      block.addEventListener('click', () => userAction(block,index))
    })
  
    resetGame.addEventListener('click', resetButton) 
    
  }
  
  gameBoard() 
  
    console.log("js file load check");