// Move all your <script> code here

document.addEventListener('DOMContentLoaded', function () {
  // Insert your JS logic from <script> here
  const actionTypeInput = document.getElementById('action-type-selector');
  const actionSelect = document.getElementById('action-select');
  const createpcnConfig = document.getElementById('createpcn-config');
  const updatepcnConfig = document.getElementById('updatepcn-config');
  function toggleConfigVisibility() {
      const selectedValue = actionTypeInput.value.toLowerCase();
      createpcnConfig.classList.add('hidden');
      updatepcnConfig.classList.add('hidden');
      if (selectedValue === 'createpcn') {
          createpcnConfig.classList.remove('hidden');
      } else if (selectedValue === 'updatepcn') {
          updatepcnConfig.classList.remove('hidden');
      }
  }
  actionSelect.addEventListener('change', (event) => {
      actionTypeInput.value = event.target.value;
      const inputEvent = new Event('input', { bubbles: true });
      actionTypeInput.dispatchEvent(inputEvent);
  });
  actionTypeInput.addEventListener('input', toggleConfigVisibility);
  document.querySelectorAll('.validation-select').forEach(select => {
      select.addEventListener('change', (event) => {
          const container = event.target.closest('.validation-container');
          const validationNameInput = container.querySelector('.validation-name-input');
          const apiConfig = container.querySelector('.api-config');
          const uiConfig = container.querySelector('.ui-config');
          validationNameInput.value = event.target.value;
          if(event.target.value === 'api') {
              apiConfig.classList.remove('hidden');
              uiConfig.classList.add('hidden');
          } else {
              apiConfig.classList.add('hidden');
              uiConfig.classList.remove('hidden');
          }
      });
      // Initial state trigger
      const initialEvent = new Event('change');
      select.dispatchEvent(initialEvent);
  });
  // Initial state
  toggleConfigVisibility();
});