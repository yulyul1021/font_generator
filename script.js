const fonts = [
    'Arial', 'Verdana', 'Helvetica', 'Times New Roman', 'Georgia', 'Courier New',
    'Tahoma', 'Geneva', 'Garamond', 'Palatino', 'Book Antiqua', 'Impact',
    'Lucida Console', 'Monaco', 'Courier', 'Comic Sans MS', 'Trebuchet MS',
    'Arial Black', 'Lucida Sans Unicode', 'Consolas', 'Century Gothic', 'Franklin Gothic Medium',
    'Copperplate', 'Brush Script MT', 'Bodoni MT', 'Californian FB', 'Candara', 'Constantia'
  ];
  
  const generateFonts = () => {
    const inputText = document.getElementById('input-text').value.trim();
    if (inputText === '') {
      alert('텍스트를 입력하세요.');
      return; // 입력값이 없으면 함수 종료
    }
    
    const fontGrid = document.getElementById('font-grid');
    fontGrid.innerHTML = '';
  
    fonts.forEach(font => {
      const fontItem = document.createElement('div');
      fontItem.classList.add('font-item');
      fontItem.style.fontFamily = font;
  
      const fontName = document.createElement('div');
      fontName.classList.add('font-name');
      fontName.textContent = font;
  
      const fontText = document.createElement('div');
      fontText.classList.add('font-text');
      fontText.textContent = inputText;
  
      fontItem.appendChild(fontName);
      fontItem.appendChild(fontText);
  
      fontItem.addEventListener('click', () => {
        copyTextToClipboard(inputText, font);
      });
  
      fontGrid.appendChild(fontItem);
    });
  };
  
  const copyTextToClipboard = (text, font) => {
    const tempElement = document.createElement('textarea');
    tempElement.value = text;
    tempElement.style.position = 'absolute';
    tempElement.style.left = '-9999px';
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand('copy');
    document.body.removeChild(tempElement);
    alert(`"${text}" 텍스트를 ${font} 폰트로 클립보드에 복사했습니다!`);
  };
  
  document.getElementById('generate-btn').addEventListener('click', generateFonts);
  
  document.getElementById('menu-icon').addEventListener('click', () => {
    const navList = document.getElementById('nav-list');
    if (navList.style.display === 'flex' || navList.style.display === '') {
      navList.style.display = 'none';
    } else {
      navList.style.display = 'flex';
    }
    navList.style.flexDirection = 'column'; // 세로로 올바르게 표시되도록 설정
  });
  
  // 화면 크기가 변경될 때 nav-list가 기본 상태로 돌아가도록 설정
  window.addEventListener('resize', () => {
    const navList = document.getElementById('nav-list');
    if (window.innerWidth > 768) {
      navList.style.display = 'flex';
      navList.style.flexDirection = 'row'; // 가로 방향으로 재설정
    } else {
      navList.style.display = 'none';
    }
  });
  