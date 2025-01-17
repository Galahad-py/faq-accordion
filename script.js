document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        const arrow = button.querySelector('.arrow');
        const currentItem = button.parentElement;
        
        // Toggle current item
        answer.classList.toggle('active');
        arrow.classList.toggle('active');
        
        // Close other items
        document.querySelectorAll('.faq-answer').forEach(otherAnswer => {
            if (otherAnswer !== answer && otherAnswer.classList.contains('active')) {
                otherAnswer.classList.remove('active');
                otherAnswer.previousElementSibling.querySelector('.arrow').classList.remove('active');
            }
        });
    });
});