let mediaRecorder;

export async function startGravacao() {

    try {
        const stream = await navigator.mediaDevices.getDisplayMedia({ audio: true, video: true });

        mediaRecorder = new MediaRecorder(stream, { mimeType: "video/webm" });

        let dados = [];

        mediaRecorder.ondataavailable = (e) => dados.push(e.data);

        mediaRecorder.onstop = function () {
            const blob = new Blob(dados, { type: "video/webm" });

            const a = document.createElement('a');

            a.href = URL.createObjectURL(blob);
            a.download = "video.webm";

            a.click();
        };

        mediaRecorder.start();
    } catch (e) {
        alert('Ocorreu um erro na gravação, reinicie o seu navegador caso da falha persista limpe o cache e tente novamente ', e)
    }
}

//======================
export function pauseGravacao() {
    mediaRecorder.pause();
}
export function resumeGravacao() {
    mediaRecorder.resume();
}
export function stopGravacao() {
    mediaRecorder.stop();
}