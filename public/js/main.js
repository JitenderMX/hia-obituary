// $('.th-btn.outline').click(function () {
//     html2canvas(document.querySelector('.boobit-img'), {
//         scale: 2 // Double the scale for capturing
//     }).then(function (canvas) {
//         // Download the scaled canvas content as an image
//         const link = document.createElement('a');
//         link.href = canvas.toDataURL('image/jpg'); // Set the image format (e.g., 'image/jpeg')
//         link.download = 'boobit-img.jpg'; // Set the filename for download
//         link.click();
//     }).catch(function (error) {
//         console.error('Error capturing the section:', error);
//     });
// });

$('#apply-change').click(function() {
    html2canvas(document.querySelector('.boobit-img')).then(function(canvas) {
        canvas.toBlob(function(blob) {
            const file = new File([blob], 'boobit-img.jpg', { type: 'image/png' });
            const dataTransfer = new DataTransfer();
            dataTransfer.items.add(file);
            $('#formFileLg')[0].files = dataTransfer.files;
        }, 'image/png');
    }).catch(function(error) {
        console.error('Error capturing the section:', error);
    });
});
$(document).ready(function () {
    $('.date').datepicker({
        multidate: true,
        format: 'dd-mm-yyyy'
    });
});
$('#prefix-select').change(function () {
    var selectedValue = $(this).val();
    $('.boobit-prefix').text(selectedValue);
});
$('#service-select').change(function () {
    var selectedValue = $(this).val();
    $('.boobit-service').text(selectedValue);
});
$('#service-time-select').change(function () {
    var selectedValue = $(this).val();
    $('.boobit-time').text(selectedValue);
});
$('#name-of-deceased').focusout(function () {
    var inputValue = $(this).val();
    $('.boobit-n-t').text(inputValue);
});
$('#address').focusout(function () {
    var inputValue = $(this).val();
    $('.boobit-address').text(inputValue);
});

// Function to format date to desired format
function formatDate(date) {
    const monthNames = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let day = date.getDate();
    let monthIndex = date.getMonth();
    let year = date.getFullYear();

    // Get the ordinal suffix for the day
    let daySuffix = (day) => {
        if (day > 3 && day < 21) return 'th';
        switch (day % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    return day + daySuffix(day) + " " + monthNames[monthIndex] + ", " + year;
}
function validateDates() {
    var dob = $('#date-of-birth').datepicker('getDate');
    var dod = $('#date-of-death').datepicker('getDate');

    // Check if date of death is less than date of birth
    if (dob && dod && dob > dod) {
        alert("Date of Death cannot be less than Date of Birth.");
        $('#date-of-birth').val(''); // Empty date of birth input
    }
}

// Handle focus out event
$('#date-of-birth').focusout(function () {
    validateDates();
    let inputValue = $(this).val();
    if (inputValue) {
        let date = $(this).datepicker('getDate');
        if (date) {
            let formattedDate = formatDate(date);
            $('.boobit-date-of-birth').text(formattedDate);
        }
    }
});

// Handle focus out event
$('#date-of-death').focusout(function () {
    validateDates();
    let inputValue = $(this).val();
    if (inputValue) {
        let date = $(this).datepicker('getDate');
        if (date) {
            let formattedDate = formatDate(date);
            $('.boobit-date-of-death').text(formattedDate);
        }
    }
});
// Handle focus out event
$('#date-of-service').focusout(function () {
    let inputValue = $(this).val();
    if (inputValue) {
        let date = $(this).datepicker('getDate');
        if (date) {
            let formattedDate = formatDate(date);
            $('.boobit-date').text(formattedDate);
        }
    }
});
$('#up-img').on('change', function (event) {
    var file = event.target.files[0];
    if (file) {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#boobit-up-img').attr('src', e.target.result);
        }
        reader.readAsDataURL(file);
    }
});

$(document).ready(function () {
    $('.greif-input').focus(function () {
        $('.boobit-greif').text("")
    })
    // Event delegation for dynamically added elements
    $('.greif').on('click', '.fa-plus-icon', function () {
        // Check the number of input fields
        if ($('.greif-input').length >= 3) {
            alert('You can only add up to 3 input fields.');
            return;
        }

        var newInput = `
    <div class="d-flex gap-3 mb-3">
        <input type="text" class="form-control greif-input" placeholder="Person in greif">
        <div class="form-control w-auto"><i class="fal fa-plus fa-plus-icon"></i></div>
    </div>`;
        $('.greif').append(newInput);
    });

    // Handle focus out event
    $('.greif').on('focusout', '.greif-input', function () {
        var value = $(this).val().trim();
        if (value) {
            var currentText = $('.boobit-greif').text();
            if (currentText) {
                currentText += ' | ' + value;
            } else {
                currentText = value;
            }
            $('.boobit-greif').text(currentText);
        }
    });
});