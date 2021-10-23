function random(min, max) {
    return parseFloat((Math.random() * (max - min) + min).toFixed(2))
  }

function floatingObject(selector, delay, size) {
        gsap.to(selector, random(1.5, 2.5), {
            y: size,
            repeat: -1,
            yoyo: true,
            ease: Power1.easeInOut,
            delay: random(0, delay)
        }
    );
}
floatingObject('.ya_1', 0 ,10);
floatingObject('.ya_2', 0.1 ,10);
floatingObject('.ya_3', 0.2 ,10);
floatingObject('.ya_4', 0.3 ,20);
floatingObject('.ya_5', 0.3 ,20);
floatingObject('.ba_1', 0.2 ,20);
floatingObject('.yp_1', 0.4 ,20);
floatingObject('.yp_2', 0.1 ,20);
floatingObject('.bb_5', 0.2 ,20);

function btn_1() {
    let rot_1 = document.querySelector(".textbox_1");
    let rot_btn_1 = document.querySelector(".rot_btn_1");
    let rot_con_1 = document.querySelector(".txtbox_content1");

    rot_1.classList.toggle("active");
    rot_btn_1.classList.toggle("active");
    rot_con_1.classList.toggle("active");
}
function btn_2() {
    let rot_2 = document.querySelector(".textbox_2");
    let rot_btn_2 = document.querySelector(".rot_btn_2");
    let rot_con_2 = document.querySelector(".txtbox_content2");

    rot_2.classList.toggle("active");
    rot_btn_2.classList.toggle("active");
    rot_con_2.classList.toggle("active");
}
function btn_3() {
    let rot_3 = document.querySelector(".textbox_3");
    let rot_btn_3 = document.querySelector(".rot_btn_3");
    let rot_con_3 = document.querySelector(".txtbox_content3");

    rot_3.classList.toggle("active");
    rot_btn_3.classList.toggle("active");
    rot_con_3.classList.toggle("active");
}

