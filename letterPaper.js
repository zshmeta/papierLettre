const text = "...by-€-Zshmeta";
const signatureElement = document.getElementById("signature");

let i = 0;

function signedByZ() {
    if (i < text.length) {
    const span = document.createElement("span");
    span.className = "letter";
    span.innerHTML = text.charAt(i);
    signatureElement.appendChild(span);
    i++;
        setTimeout(signedByZ, 280);
        shakeEmUp('i')
  } else {
           signatureElement.querySelectorAll(".letter").forEach((letter, index) => {
            const randomDuration = Math.random() * 1 + 0.5;
            const animationName = `shake-${index}`;

            const keyframes =
                `@keyframes ${animationName} {
                    0%, 100% { transform: translate(0, 0); }
                    10%, 30%, 50%, 70%, 90% { transform: translate(-1px, 1px); }
                    20%, 40%, 60%, 80% { transform: translate(1px, -1px); }
                }`;

            const style = document.createElement("style");
            style.textContent = keyframes;
            document.head.appendChild(style);

            letter.style.animationName = animationName;
            letter.style.animationDuration = `${randomDuration}s`;
            letter.style.animationTimingFunction = 'ease-in-out';
            letter.style.animationIterationCount = 'infinite';
        });
    }

}

signedByZ();
const shakeEmUp = () => {
    signatureElement.querySelectorAll(".letter").forEach((letter, index) => {
        const randomDuration = Math.random() * 1 + 0.5;
        const animationName = `shake-${index}`;

        const keyframes = `@keyframes ${animationName} {
                    0%, 100% { transform: translate(0, 0); }
                    10%, 30%, 50%, 70%, 90% { transform: translate(-1px, 1px); }
                    20%, 40%, 60%, 80% { transform: translate(1px, -1px); }
                }`;

        const style = document.createElement("style");
        style.textContent = keyframes;
        document.head.appendChild(style);

        letter.style.animationName = animationName;
        letter.style.animationDuration = `${randomDuration}s`;
        letter.style.animationTimingFunction = "ease-in-out";
        letter.style.animationIterationCount = "infinite";
    });
}

forEach(letter)= shakeEmUp();