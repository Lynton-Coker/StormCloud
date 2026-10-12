document.addEventListener("DOMContentLoaded", () => {
    const seekbars = document.querySelectorAll(".seekbar");

    seekbars.forEach((seekbar) => {
        const progressValue =
            document.querySelector("#progress-value");

        function updateSeekbar() {
            const min = Number(seekbar.min) || 0;
            const max = Number(seekbar.max) || 100;
            const value = Number(seekbar.value);

            const percentage =
                ((value - min) / (max - min)) * 100;

            seekbar.style.setProperty(
                "--progress",
                `${percentage}%`
            );
        }

        seekbar.addEventListener("input", updateSeekbar);

        // Set the initial gradient
        updateSeekbar();
    });
});

const volumeBar = document.querySelector(".volume-bar");

volumeBar.addEventListener("input", function () {
    const value = volumeBar.value;

    volumeBar.style.setProperty("--progress", value + "%");
});

