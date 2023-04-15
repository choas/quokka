// KLJ-1102 Piezo Element
//
// Nets
//    A: corresponds to pin 1
//    B: corresponds to pin 2

module.exports = {
  params: {
    A: undefined,
    B: undefined,
  },
  body: p => `
      (module KLJ-1102_Piezo (layer F.Cu) (tedit 5970F8E5)
      ${p.at /* parametric position */}

    ${'' /* footprint */}
    (attr smd)
      (fp_text reference "REF**" (at 6 3 unlocked) (layer "F.SilkS") hide
          (effects (font (size 1 1) (thickness 0.1)))
        (tstamp b23563ec-d1a0-4353-854e-8da058f80e10)
      )
      (fp_text value "KLJ-1102" (at 5.585364 4.5267 unlocked) (layer "F.Fab")
          (effects (font (size 1 1) (thickness 0.15)))
        (tstamp 063812fc-b133-4bdd-9629-fb66bb5108ed)
      )
      (fp_text user "KLJ-1102" (at 5.414636 4.5267 unlocked) (layer "B.Fab")
          (effects (font (size 1 1) (thickness 0.15)) (justify mirror))
        (tstamp 037e5423-599c-420c-93a9-a934906d15d5)
      )
      (fp_rect (start 11 0) (end 0 9)
        (stroke (width 0.1) (type default)) (fill none) (layer "B.SilkS") (tstamp 01c2fabf-b739-44a2-b13f-b473c1618c70))
      (fp_rect (start 0 0) (end 11 9)
        (stroke (width 0.1) (type default)) (fill none) (layer "F.SilkS") (tstamp 9d8d2507-d999-4c2d-b86a-9421ac68fcf1))
      (pad "1" thru_hole circle (at -3.2 4.5 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.A.str} (tstamp f7988e81-5372-4c96-9e61-39accdd23cbb))
      (pad "1" smd rect (at 0 2.9 ${p.rot}) (size 3.2 3.2) (drill (offset -1.6 1.6)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.A.str}
        (thermal_bridge_angle 45) (tstamp 325a6f83-71ae-467b-90fd-51e032bc0a67))
      (pad "1" smd rect (at 0 2.9 ${p.rot}) (size 3.2 3.2) (drill (offset -1.6 1.6)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.A.str}
        (thermal_bridge_angle 45) (tstamp 6d7be1a3-c4bc-4a06-accd-8eeb77bccb5b))
      (pad "2" smd rect (at 11 2.9 ${p.rot}) (size 3.2 3.2) (drill (offset 1.6 1.6)) (layers "F.Cu" "F.Paste" "F.Mask") ${p.B.str}
        (thermal_bridge_angle 45) (tstamp f5574cc9-70e3-4aaa-a4b8-26c125fd529e))
      (pad "2" smd rect (at 11 2.9 ${p.rot}) (size 3.2 3.2) (drill (offset 1.6 1.6)) (layers "B.Cu" "B.Paste" "B.Mask") ${p.B.str}
        (thermal_bridge_angle 45) (tstamp cfd2f793-b20c-47d2-a894-1af58068dee3))
      (pad "2" thru_hole circle (at 14.2 4.5 ${p.rot}) (size 0.5 0.5) (drill 0.25) (layers "*.Cu" "*.Mask") ${p.B.str} (tstamp f3eca821-cc12-4107-894f-a7d4805518ce))
    )
  `
}

