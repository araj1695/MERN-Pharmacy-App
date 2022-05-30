const items = [
    {
        "_id": "628b2bfd7833166ffd74d7fa",
        "name": "Pudin Hara",
        "brand": "Dabar India Ltd",
        "description": "Dabar Pudin Hara Pearls Capsule",
        "price": 19,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d7fb",
        "name": "Liv.52",
        "brand": "The Himalya Drug",
        "description": "LIV 52 is unparalleled in liver care.The key ingredients Chicory (Kasani) protects the liver against alcohol toxicity. It is also a potent antioxidant, which can be seen by its free radical scavenging property and has hepatoprotective property.The Caper Bush (Himsra) is a potent hepatoprotective.It inhibits the elevation of malondialdehyde (biomarker for oxidative stress) levels in plasma and hepatic cells. Caper Bush also inhibits the ALT and AST enzyme levels and improves the functional efficiency of the liver.Flavonoids present in the Caper Bush exhibit significant antioxidant properties, as well. ",
        "price": 101.4,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d7fc",
        "name": "Becadexamin Capsule 30'S",
        "brand": "Mkt: Glaxosmithkline Pharmaceuticals Ltd",
        "description": "BECADEXAMIN contains,      Vitamins such as Vitamin A, Vitamin D3, Vitamin E, Vitamin B2, Vitamin B6, Vitamin B12, Vitamin C, Vitamin B1, Nicotinamide and D-Panthenol     Minerals such as Calcium, Copper, Manganese, Zinc, Iodine and Magnesium",
        "price": 101.4,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d7fe",
        "name": "Folvite Tablet 45'S",
        "brand": "Pfizer Limited",
        "description": "It is used to treat,      folate deficiency anaemia caused by poor diet, poor absorption of food       prevent babies born with neural tube defects such as spina bifida",
        "price": 55.31,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d7fd",
        "name": "Orofer XT Tablet 10'S",
        "brand": "Emcure Pharmaceuticals Ltd",
        "description": "OROFER XT is used in the management of:      iron deficiency anemia     menorrhagia and folate deficiency anemia     foetal neural tube defects     anemia due to pregnancy and lactation     generalized weakness     iron deficiency either due to chronic blood loss or poor absorption",
        "price": 137.92,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d800",
        "name": "Himalaya Wellness Ashvagandha Tablet 60's",
        "brand": "The Himalaya Drug Company",
        "description": "Frequently referred to as “Indian ginseng” because of its rejuvenating properties. Helps maintain a healthy balance between the nervous system, endocrine glands, and immune system, thus reducing the harmful effects of long-term stress on the body. Traditionally referred to as an aphrodisiac. Ashwagandha promotes sexual health by uplifting the mood, reducing anxiety, improving energy levels and fertility, thus supporting sexual performance. Additional Information",
        "price": 165,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d7ff",
        "name": "Himalaya Liv.52 HB Capsule 10",
        "brand": "The Himalaya Drug Company",
        "description": "LIV 52 HB Capsule are an effective management of hepatitis B.",
        "price": 124.6,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d801",
        "name": "Pankajakasthuri Orthoherb Tablet 60's",
        "brand": " Pankajakasthuri Herbals India Pvt Ltd",
        "description": "Orthoherb is a unique formula containing 23 herbs. Continued use will arrest bone damage and strengthen cartilages. The uniquely formulated Orthoherb is 100% natural and gives relief from back pain, knee pain and all types of inflammatory joint conditions. It is prescribed by Ayurvedic practitioners for over 20 years and contains 23 herbs uniquely formulated for joint pains. Orthoherb works by protecting the synovial membrane from inflammation and damage, reducing the swelling due to its specific anti-inflammatory and diuretic action, enhancing fluid production thus restoring the synovial fluid balance and consistency at bone joints. ",
        "price": 225.5,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d803",
        "name": "OneTouch Select Plus Simple Glucometer",
        "brand": "LIFESCAN MEDICAL DEVICE INDIA PVT LTD",
        "description": "OneTouch® Select Plus Simple® is a blood glucose monitoring system, which comes with free test strips (10's pack),",
        "price": 1075,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d804",
        "name": "Dabur Honitus Herbal Cough Remedy Syrup 100 ml",
        "brand": "Dabur India Ltd",
        "description": "Honitus is an Ayurvedic proprietary herbal cough syrup with benefits of honey, intended to provide relief in acute nonproductive cough and throat irritation without causing drowsiness. ",
        "price": 103.95,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d802",
        "name": "Dabur Hingoli Tablet 90's",
        "brand": "Dabur India Ltd",
        "description": "Dabur Hingoli is an ayurvedic medicine for gastroenteritis made from Hing (Asafoetida). Asafoetida Hingoli promotes digestion and helps to ease the bloated stomach by relieving gas. Asafoetida Hingoli is a digestive and gastro-intestinal stimulant for the relief of stomach disorders. ",
        "price": 28.5,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d805",
        "name": "Himalaya Septilin Syrup 200 ml",
        "brand": "The Himalaya Drug Company",
        "description": "Not available",
        "price": 118.9,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d806",
        "name": "Himalaya Rumalaya Forte Tablet 30's",
        "brand": " The Himalaya Drug Company",
        "description": "Himalaya rumalaya forte is an herbal supplement that is prepared by mixing a combination of herbs, offers a natural remedy for arthritis. Shallaki extract is effective in reducing joint swelling, pain, stiffness in joints, and inflammatory joint disorders that also include rheumatoid arthritis and osteoarthritis. It also reduces the degradation of glycosaminoglycans and protects the joints. Guggulu has an anti-inflammatory agent and antioxidant that inhibits nitric oxide formation which causes oxidative damage to degenerate joints and bones.",
        "price": 146.85,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d807",
        "name": "Orthoboon Sugar Free Banana Pineapple Flavour Sachet 12Gm",
        "brand": "Mankind Pharma Pvt Ltd",
        "description": "      ORTHOBOON contains Collagen peptides, Glucosamine sulphate potassium chloride, Vitamin C",
        "price": 76,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2bfd7833166ffd74d808",
        "name": "Jointace C2 Tablet 10'S",
        "brand": "Meyer Organics Ltd",
        "description": "ASCORBIC ACID(VIT C)+Chondroitin Sulfate+COLLAGEN PEPTIDE+ELEMENTAL COPPER+ELEMENTAL IRON+ELEMENTAL MANGANESE+Elemental zinc+FOLIC ACID+glucosamine sulfate potassium chloride+TOCOPHERYL ACETATE",
        "price": 240.8,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d81a",
        "name": "Pudin Hara",
        "brand": "Dabar India Ltd",
        "description": "Dabar Pudin Hara Pearls Capsule",
        "price": 19,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d81b",
        "name": "Liv.52",
        "brand": "The Himalya Drug",
        "description": "LIV 52 is unparalleled in liver care.The key ingredients Chicory (Kasani) protects the liver against alcohol toxicity. It is also a potent antioxidant, which can be seen by its free radical scavenging property and has hepatoprotective property.The Caper Bush (Himsra) is a potent hepatoprotective.It inhibits the elevation of malondialdehyde (biomarker for oxidative stress) levels in plasma and hepatic cells. Caper Bush also inhibits the ALT and AST enzyme levels and improves the functional efficiency of the liver.Flavonoids present in the Caper Bush exhibit significant antioxidant properties, as well. ",
        "price": 101.4,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d81d",
        "name": "Orofer XT Tablet 10'S",
        "brand": "Emcure Pharmaceuticals Ltd",
        "description": "OROFER XT is used in the management of:      iron deficiency anemia     menorrhagia and folate deficiency anemia     foetal neural tube defects     anemia due to pregnancy and lactation     generalized weakness     iron deficiency either due to chronic blood loss or poor absorption",
        "price": 137.92,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d81c",
        "name": "Becadexamin Capsule 30'S",
        "brand": "Mkt: Glaxosmithkline Pharmaceuticals Ltd",
        "description": "BECADEXAMIN contains,      Vitamins such as Vitamin A, Vitamin D3, Vitamin E, Vitamin B2, Vitamin B6, Vitamin B12, Vitamin C, Vitamin B1, Nicotinamide and D-Panthenol     Minerals such as Calcium, Copper, Manganese, Zinc, Iodine and Magnesium",
        "price": 101.4,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d81e",
        "name": "Folvite Tablet 45'S",
        "brand": "Pfizer Limited",
        "description": "It is used to treat,      folate deficiency anaemia caused by poor diet, poor absorption of food       prevent babies born with neural tube defects such as spina bifida",
        "price": 55.31,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d81f",
        "name": "Himalaya Liv.52 HB Capsule 10",
        "brand": "The Himalaya Drug Company",
        "description": "LIV 52 HB Capsule are an effective management of hepatitis B.",
        "price": 124.6,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d820",
        "name": "Himalaya Wellness Ashvagandha Tablet 60's",
        "brand": "The Himalaya Drug Company",
        "description": "Frequently referred to as “Indian ginseng” because of its rejuvenating properties. Helps maintain a healthy balance between the nervous system, endocrine glands, and immune system, thus reducing the harmful effects of long-term stress on the body. Traditionally referred to as an aphrodisiac. Ashwagandha promotes sexual health by uplifting the mood, reducing anxiety, improving energy levels and fertility, thus supporting sexual performance. Additional Information",
        "price": 165,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d822",
        "name": "Dabur Hingoli Tablet 90's",
        "brand": "Dabur India Ltd",
        "description": "Dabur Hingoli is an ayurvedic medicine for gastroenteritis made from Hing (Asafoetida). Asafoetida Hingoli promotes digestion and helps to ease the bloated stomach by relieving gas. Asafoetida Hingoli is a digestive and gastro-intestinal stimulant for the relief of stomach disorders. ",
        "price": 28.5,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d824",
        "name": "Dabur Honitus Herbal Cough Remedy Syrup 100 ml",
        "brand": "Dabur India Ltd",
        "description": "Honitus is an Ayurvedic proprietary herbal cough syrup with benefits of honey, intended to provide relief in acute nonproductive cough and throat irritation without causing drowsiness. ",
        "price": 103.95,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d821",
        "name": "Pankajakasthuri Orthoherb Tablet 60's",
        "brand": " Pankajakasthuri Herbals India Pvt Ltd",
        "description": "Orthoherb is a unique formula containing 23 herbs. Continued use will arrest bone damage and strengthen cartilages. The uniquely formulated Orthoherb is 100% natural and gives relief from back pain, knee pain and all types of inflammatory joint conditions. It is prescribed by Ayurvedic practitioners for over 20 years and contains 23 herbs uniquely formulated for joint pains. Orthoherb works by protecting the synovial membrane from inflammation and damage, reducing the swelling due to its specific anti-inflammatory and diuretic action, enhancing fluid production thus restoring the synovial fluid balance and consistency at bone joints. ",
        "price": 225.5,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d823",
        "name": "OneTouch Select Plus Simple Glucometer",
        "brand": "LIFESCAN MEDICAL DEVICE INDIA PVT LTD",
        "description": "OneTouch® Select Plus Simple® is a blood glucose monitoring system, which comes with free test strips (10's pack),",
        "price": 1075,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d825",
        "name": "Himalaya Septilin Syrup 200 ml",
        "brand": "The Himalaya Drug Company",
        "description": "Not available",
        "price": 118.9,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d826",
        "name": "Himalaya Rumalaya Forte Tablet 30's",
        "brand": " The Himalaya Drug Company",
        "description": "Himalaya rumalaya forte is an herbal supplement that is prepared by mixing a combination of herbs, offers a natural remedy for arthritis. Shallaki extract is effective in reducing joint swelling, pain, stiffness in joints, and inflammatory joint disorders that also include rheumatoid arthritis and osteoarthritis. It also reduces the degradation of glycosaminoglycans and protects the joints. Guggulu has an anti-inflammatory agent and antioxidant that inhibits nitric oxide formation which causes oxidative damage to degenerate joints and bones.",
        "price": 146.85,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d827",
        "name": "Orthoboon Sugar Free Banana Pineapple Flavour Sachet 12Gm",
        "brand": "Mankind Pharma Pvt Ltd",
        "description": "ORTHOBOON contains Collagen peptides, Glucosamine sulphate potassium chloride, Vitamin C",
        "price": 76,
        "quantity": 0,
        "__v": 0
    },
    {
        "_id": "628b2e907833166ffd74d828",
        "name": "Jointace C2 Tablet 10'S",
        "brand": "Meyer Organics Ltd",
        "description": "ASCORBIC ACID(VIT C)+Chondroitin Sulfate+COLLAGEN PEPTIDE+ELEMENTAL COPPER+ELEMENTAL IRON+ELEMENTAL MANGANESE+Elemental zinc+FOLIC ACID+glucosamine sulfate potassium chloride+TOCOPHERYL ACETATE",
        "price": 240.8,
        "quantity": 0,
        "__v": 0
    }
]

export default items;