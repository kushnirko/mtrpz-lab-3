window.addEventListener('load', () => {
  const outLabel = document.getElementById('label-output');
  const inTxtArea = document.getElementById('md-input');
  const outTxtArea = document.getElementById('html-output');

  const setDefault = () => {
    outLabel.innerText = 'Generated HTML fragment:';
    inTxtArea.value = '';
    outTxtArea.value = '';
  };

  setDefault();

  const convertBtn = document.getElementById('btn-convert');
  convertBtn.addEventListener('click', async () => {
    const md = inTxtArea.value;
    const response = await fetch('/convert', {
      method: 'POST',
      body: md,
    });
    if (response.ok) {
      outLabel.innerText = 'Generated HTML fragment:';
      outTxtArea.style.color = 'black';
      outTxtArea.value = await response.text();
    } else {
      outLabel.innerText = 'Error message:';
      outTxtArea.style.color = 'red';
      outTxtArea.value = response.status === 400
        ? await response.text()
        : 'something went wrong...';
    }
  });

  const clearBtn = document.getElementById('btn-clear');
  clearBtn.addEventListener('click', () => {
    setDefault();
  });
});
