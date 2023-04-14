module.exports = {
    params: {
        designator: 'D',
        from: undefined,
        to: undefined,
    },
    body: p => `
      (module D_0805 (layer F.Cu) (tedit 5B24D78E)
        ${p.at /* parametric position */}

        ${'' /* footprint */}
        (fp_line (start -1.45 0) (end -2 0)
          (stroke (width 0.2) (type default)) (layer "F.Cu") (tstamp 8ce764e1-0358-4364-b86d-0eea684c49de))
        (fp_line (start 1.45 0) (end 2 0)
          (stroke (width 0.2) (type default)) (layer "F.Cu") (tstamp 167c9e9f-72c2-4e2f-900c-23b06577ad33))
        (fp_line (start -1.45 0) (end -2 0)
          (stroke (width 0.2) (type default)) (layer "B.Cu") (tstamp ce30e476-bebd-4320-be1c-8e51dbf33cd5))
        (fp_line (start 1.45 0) (end 2 0)
          (stroke (width 0.2) (type default)) (layer "B.Cu") (tstamp 421969a3-8377-4c2d-953f-f82be88400f5))
        (fp_line (start -1.61 -0.8) (end 0.99 -0.8)
          (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 5e04b147-c494-4dec-b4bf-9d0db2c5bf89))
        (fp_line (start -1.61 0.8) (end -1.61 -0.8)
          (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 4fbb026c-953f-4095-b981-3bfd5d5d88e2))
        (fp_line (start -1.61 0.8) (end 0.99 0.8)
          (stroke (width 0.12) (type solid)) (layer "B.SilkS") (tstamp 7382e8c7-17df-4c4a-a18a-50db3450ad21))
        (fp_line (start -1.6 -0.8) (end -1.6 0.8)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp a5beb045-9d0b-4516-9ae1-360a73bf63a1))
        (fp_line (start -1.6 -0.8) (end 1 -0.8)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp c2d4a890-6810-4476-95d9-780850a09807))
        (fp_line (start -1.6 0.8) (end 1 0.8)
          (stroke (width 0.12) (type solid)) (layer "F.SilkS") (tstamp 936edbc6-9c1f-40ae-a40c-21a96f643ec3))
        (fp_line (start -1.7 -0.88) (end -1.7 0.88)
          (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (tstamp 8ef3ccd9-8b81-4859-9b8c-ea02a5e0a7d9))
        (fp_line (start -1.7 0.88) (end 1.7 0.88)
          (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (tstamp a9d72f54-573b-4d44-a399-2b982d635fcc))
        (fp_line (start 1.7 -0.88) (end -1.7 -0.88)
          (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (tstamp 4210eb6e-37d6-44eb-8401-9904380b5c43))
        (fp_line (start 1.7 0.88) (end 1.7 -0.88)
          (stroke (width 0.05) (type solid)) (layer "B.CrtYd") (tstamp a826c1bc-092f-43fa-8474-27edc33b9bb4))
        (fp_line (start -1.7 -0.88) (end 1.7 -0.88)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp 12539fde-21ed-4872-babe-358611831dc1))
        (fp_line (start -1.7 0.88) (end -1.7 -0.88)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp ce924c54-c329-4bc7-bdd6-deca39f521d6))
        (fp_line (start 1.7 -0.88) (end 1.7 0.88)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp c897eefc-6864-4b9e-81c2-f70d6f46cda2))
        (fp_line (start 1.7 0.88) (end -1.7 0.88)
          (stroke (width 0.05) (type solid)) (layer "F.CrtYd") (tstamp ce31be45-36b0-48d2-980d-fe18949f18b8))
        (fp_line (start -1 -0.65) (end -1 0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp c0257250-35c3-43c1-bf12-485c1f6eab80))
        (fp_line (start -1 -0.65) (end 1 -0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 7b7e98d9-f665-4bcf-8da7-7a4362c03adb))
        (fp_line (start -1 0.65) (end -1 -0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 26bd7632-7ace-48cf-9367-53b8b14fc498))
        (fp_line (start -1 0.65) (end 1 0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 640e9486-11f4-47af-85a5-98d1d6bccffa))
        (fp_line (start -0.1 -0.2) (end -0.1 0.2)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 831e0dc3-0c01-4c93-bce6-7d4ac0e29ebe))
        (fp_line (start -0.1 0) (end -0.3 0)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp deb3a866-758a-4d88-8e69-63ea5ac31cc2))
        (fp_line (start -0.1 0) (end 0.2 0.2)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 27b140f8-f56e-43e9-86cd-e8d0aa52e27c))
        (fp_line (start 0.2 -0.2) (end -0.1 0)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 33942329-8ebb-44b6-bb25-627c07205dc4))
        (fp_line (start 0.2 0) (end 0.4 0)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp d3a06d67-6816-4de8-86c6-0c380de98c0b))
        (fp_line (start 0.2 0.2) (end 0.2 -0.2)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 3a60e491-cf05-4a5a-adf7-7d1061755c2c))
        (fp_line (start 1 -0.65) (end -1 -0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 36e0ef66-19b0-4656-9e3a-96e058e7afce))
        (fp_line (start 1 -0.65) (end 1 0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 839f954e-f8b9-4e33-b5da-607b24428d4e))
        (fp_line (start 1 0.65) (end -1 0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 37007348-b605-4386-8266-41430546852d))
        (fp_line (start 1 0.65) (end 1 -0.65)
          (stroke (width 0.1) (type solid)) (layer "B.Fab") (tstamp 40fa770e-7f64-4c29-a2ba-7d3494894ec4))
        (fp_line (start -1 -0.65) (end 1 -0.65)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 63d489a1-5b8f-464e-bc9e-7fe6a9b46393))
        (fp_line (start -1 0.65) (end -1 -0.65)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 8fed85f5-efa6-4116-9d27-3850b7dfcf3b))
        (fp_line (start -0.1 -0.2) (end -0.1 0.2)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp b9e879e7-d9d6-44fa-9c3c-89587fc6bdee))
        (fp_line (start -0.1 -0.2) (end -0.1 0.2)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp da47a932-8d99-4258-97ce-da0b059365e5))
        (fp_line (start -0.1 0) (end -0.3 0)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 2ae50900-96d6-472a-8892-0fad0817d715))
        (fp_line (start -0.1 0) (end -0.3 0)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp ec0b8e30-7c68-4bee-b0ed-41e6f33bd4ad))
        (fp_line (start -0.1 0) (end 0.2 0.2)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 47b08982-f13c-426c-a214-533f5baa74e2))
        (fp_line (start -0.1 0) (end 0.2 0.2)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 7cd0605b-0df9-4a04-8e91-32390bb1f995))
        (fp_line (start 0.2 -0.2) (end -0.1 0)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp aa5d3870-6eba-4e95-9674-4c3a1c1bb4dd))
        (fp_line (start 0.2 -0.2) (end -0.1 0)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp eae4d15f-a302-4fd6-9299-9237578061a3))
        (fp_line (start 0.2 0) (end 0.4 0)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 906bc923-cf46-41c4-a856-02866d4c9dde))
        (fp_line (start 0.2 0) (end 0.4 0)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp b9885046-e3b1-424c-9276-f82870dca50f))
        (fp_line (start 0.2 0.2) (end 0.2 -0.2)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 12064d54-c765-49a1-a8d6-2ae4d67f64ca))
        (fp_line (start 0.2 0.2) (end 0.2 -0.2)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp cf615bef-7f2d-46cf-8fda-6e84a31c7992))
        (fp_line (start 1 -0.65) (end 1 0.65)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp b5245196-d43d-4d67-84f2-0971c61a9853))
        (fp_line (start 1 0.65) (end -1 0.65)
          (stroke (width 0.1) (type solid)) (layer "F.Fab") (tstamp 6a916440-a875-4e2a-b109-e0c066eeddf7))
        (pad "1" thru_hole circle (at -2.25 0) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask")
          (clearance 0.125) (tstamp c4fc7549-9845-41dd-b729-ba93c75ef47a))
        (pad "2" thru_hole circle (at 2.25 0) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask")
          (clearance 0.125) (tstamp f7ba577f-56d2-491a-b73c-4b1be5ef7201))
        (pad "1" smd rect (at -1.05 0) (size 0.8 0.9) (layers "F.Cu" "F.Paste" "F.Mask") ${p.to.str})
        (pad "1" smd rect (at -1.05 0) (size 0.8 0.9) (layers "B.Cu" "B.Paste" "B.Mask") ${p.to.str})
        (pad "2" smd rect (at 1.05 0) (size 0.8 0.9) (layers "F.Cu" "F.Paste" "F.Mask") ${p.from.str})
        (pad "2" smd rect (at 1.05 0) (size 0.8 0.9) (layers "B.Cu" "B.Paste" "B.Mask") ${p.from.str})
    )
  `
}
