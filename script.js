// Listen for clicks on the whole document.
document.addEventListener('click', function(e) {
  // If the click target is not inside the center boarder, create the glowing dot effect.
  const centerBorder = document.getElementById('center-border');
  if (!centerBorder.contains(e.target)) {
    createDot(e.pageX, e.pageY);
  }
});

// Function to create a small purple glowing dot that fades out in 1s.
function createDot(x, y) {
  const dot = document.createElement('div');
  dot.className = 'dot';
  // Center the dot on the click position.
  dot.style.left = (x - 10) + 'px';
  dot.style.top = (y - 10) + 'px';
  document.body.appendChild(dot);
  
  // Remove the dot element after the animation completes.
  setTimeout(() => {
    dot.remove();
  }, 1000);
}

// Disable default browser context menu to avoid extra popups on multiple clicks.
document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});
