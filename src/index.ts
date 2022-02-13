import pptxgen from 'pptxgenjs';

let pres = new pptxgen();
let slide = pres.addSlide();

slide.addText("Hello Ana!!", {
    x: 1.5,
    y: 1.5,
    color: "166bff",
    fill: { color: "c0c0c0" },
    align: pres.AlignH.center,
});

pres.writeFile({ fileName: "sampleAna.pptx" });