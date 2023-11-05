document.addEventListener('DOMContentLoaded', function () {
    const ball = document.getElementById('bounceBall');
  
    document.addEventListener('click', function (event) {
      
      const clickX = event.clientX;
      const clickY = event.clientY;
  
      ball.style.left = clickX + 'px';
      ball.style.top = clickY + 'px';
  
      // Add a class to start the bounce animation
      ball.classList.add('bounceAnimation');
  
      setTimeout(function () {
        ball.classList.remove('bounceAnimation');
      }, 2000);
    });
  });
  