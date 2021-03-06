import swal from 'sweetalert';

const initSweetalert = (selector, options = {}, callback = () => {}) => {
  const elements = document.querySelectorAll(selector);
  elements.forEach((swalButton) => {
    if (swalButton) { // protect other pages
    swalButton.addEventListener('click', () => {
        options.value = event.target.dataset.id
        swal.setActionValue({
            confirm: event.target.dataset.id
        })

        swal(options).then(callback);
    });
    }
  })
};

const deleteAlert = () => {
  const elements = document.querySelectorAll(".delete-organisation");
  elements.forEach((swalButton) => {
    if (swalButton) {
      swalButton.addEventListener('click', () => {
        const organisationId = event.target.dataset.id

        swal({
            title: "Supprimer Organisation",
            text: "Êtes-vous sûr ?",
            icon: "erreur",
            buttons: ["Oh nooon!", "Ooh ouiii!"],
        }).then((value) => {
          if (value) {
              document.getElementById(`del-org-${organisationId}`).click()
          };
        });
      })
    }
  })
};

const completeMissionAlert = () => {
  const elements = document.querySelectorAll(".complete-mission");
  elements.forEach((swalButton) => {
    if (swalButton) {
      swalButton.addEventListener('click', () => {
        swal({
            title: "Terminer la mission",
            text: "Êtes-vous sûr ?",
            icon: "success",
            buttons: ["Oh nooon!", "Ooh ouiii!"],
        }).then((value) => {
          if (value) {
            document.getElementById('complete-cta').click()
          };
        });
      })
    }
  })
};

export { initSweetalert, deleteAlert, completeMissionAlert };
