interface Technique {
    english: string;
    korean: string;
    hangul: string;
}

interface FormTechniques {
    id: number;
    blocks: Technique[];
    breathings: Technique[];
    kicks: Technique[];
    stances: Technique[];
    strikes: Technique[];
    throws: Technique[];
    traps: Technique[];
    armLocks: Technique[];
    rolls: Technique[];
    chokes: Technique[];
    escapes: Technique[];
}

export const formTech: FormTechniques[] = [
    {
        id: 12,
        blocks: [
            {
                english: "High section forearm block",
                korean: "sangdan p'almok makki",
                hangul: "상단 팔목 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Front snap kick",
                korean: "ap ch'agi",
                hangul: "앞 차기"
            }
        ],
        stances: [
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "High section front punch",
                korean: "sangdan ap jumŏk jirŭgi",
                hangul: "상단 앞 주먹 지르기"
            },
            {
                english: "Reverse high section front punch",
                korean: "sangdan bandae ap jumŏk jirŭgi",
                hangul: "상단 반대 앞 주먹 지르기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 11,
        blocks: [
            {
                english: "Low section forearm block",
                korean: "hadan p'almok makki",
                hangul: "하단 팔목 막기"
            },
            {
                english: "Middle section forearm block",
                korean: "jungdan p'almok makki",
                hangul: "중단 팔목 막기"
            },
            {
                english: "Middle section inside forearm block",
                korean: "jungdan an p'almok makki",
                hangul: "중단 안 팔목 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Front snap kick",
                korean: "ap ch'agi",
                hangul: "앞 차기"
            }
        ],
        stances: [
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "Middle section front punch",
                korean: "jungdan ap jumŏk jirŭgi",
                hangul: "중단 앞 주먹 지르기"
            },
            {
                english: "Reverse middle section front punch",
                korean: "jungdan bandae ap jumŏk jirŭgi",
                hangul: "중단 반대 앞 주먹 지르기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 10,
        blocks: [
            {
                english: "Guarding block",
                korean: "daebi makki",
                hangul: "대비 막기"
            },
            {
                english: "Low section double knifehand block",
                korean: "hadan dul sonk'al makki",
                hangul: "하단 둘 손칼 막기"
            },
            {
                english: "Low section forearm block",
                korean: "hadan p'almok makki",
                hangul: "하단 팔목 막기"
            },
            {
                english: "Middle section double knifehand block",
                korean: "jungdan dul sonk'al makki",
                hangul: "중단 둘 손칼 막기"
            },
            {
                english: "Middle section knifehand block",
                korean: "jungdan sonk'al makki",
                hangul: "중단 손칼 막기"
            },
            {
                english: "Reverse middle section knifehand block",
                korean: "jungdan bandae sonk'al makki",
                hangul: "중단 반대 손칼 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Roundhouse kick",
                korean: "dollyŏ ch'agi",
                hangul: "돌려 차기"
            },
            {
                english: "Step-behind side thrust kick",
                korean: "baldwiro olmkyŏ yŏp ch'agi",
                hangul: "발뒤로 옮겨 옆 차기"
            }
        ],
        stances: [
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "High section outward knifehand strike",
                korean: "sangdan bakkŭro sonk'al ddaerigi",
                hangul: "상단 밖으로 손칼 때리기"
            },
            {
                english: "High section palm-heel strike",
                korean: "sangdan sonbadak jirŭgi",
                hangul: "상단 손바닥 지르기"
            },
            {
                english: "Middle section front punch",
                korean: "jungdan ap jumŏk jirŭgi",
                hangul: "중단 앞 주먹 지르기"
            },
            {
                english: "Outside forearm strike",
                korean: "bakkat p'almok ddaerigi",
                hangul: "밖앗 팔목 때리기"
            },
            {
                english: "Reverse high section front elbow strike",
                korean: "sangdan bandae ap p'alkkumch'i jirŭgi",
                hangul: "상단 반대 앞 팔꿈치 지르기"
            },
            {
                english: "Reverse high section palm-heel strike",
                korean: "sangdan bandae sonbadak jirŭgi",
                hangul: "상단 반대 손바닥 지르기"
            },
            {
                english: "Reverse middle section front punch",
                korean: "jungdan bandae ap jumŏk jirŭgi",
                hangul: "중단 반대 앞 주먹 지르기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 9,
        blocks: [
            {
                english: "Augmented block",
                korean: "gŏdŭrŏ makki",
                hangul: "거들어 막기"
            },
            {
                english: "Low section forearm block",
                korean: "hadan p'almok makki",
                hangul: "하단 팔목 막기"
            },
            {
                english: "Low section palm-heel block",
                korean: "hadan sonbadak makki",
                hangul: "하단 손바닥 막기"
            },
            {
                english: "Middle section inside forearm block",
                korean: "jungdan an p'almok makki",
                hangul: "중단 안 팔목 막기"
            },
            {
                english: "Middle section twin inside forearm block",
                korean: "jungdan ssang an p'almok makki",
                hangul: "중단 쌍 안 팔목 막기"
            },
            {
                english: "Reverse low section forearm block",
                korean: "hadan bandae p'almok makki",
                hangul: "하단 반대 팔목 막기"
            },
            {
                english: "Twin forearm box block",
                korean: "ssang son p'almok makki",
                hangul: "쌍 손 팔목 막기"
            },
            {
                english: "Wedging knifehand block",
                korean: "haech'yŏ sonk'al makki",
                hangul: "해쳐 손칼 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [],
        stances: [
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward fixed stance",
                korean: "orŭnbal gojŏng sŏgi",
                hangul: "오른발 고정 서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "High section backfist strike",
                korean: "sangdan dŭngjumŏk jirŭgi",
                hangul: "상단 등주먹 지르기"
            },
            {
                english: "High section front punch",
                korean: "sangdan ap jumŏk jirŭgi",
                hangul: "상단 앞 주먹 지르기"
            },
            {
                english: "High section twin punch",
                korean: "sangdan ssang ap jumŏk jirŭgi",
                hangul: "상단 쌍 앞 주먹 지르기"
            },
            {
                english: "Middle section side punch",
                korean: "jungdan yŏp jumŏk jirŭgi",
                hangul: "중단 옆 주먹 지르기"
            },
            {
                english: "Middle section twin rear elbow strike",
                korean: "jungdan ssang dwi p'alkkumch'i ddaerigi",
                hangul: "중단 쌍 뒤 팔꿈치 때리기"
            },
            {
                english: "Reverse high section upward elbow strike",
                korean: "sangdan bandae wi p'alkkumch'i ddaerigi",
                hangul: "상단 반대 위 팔꿈치 때리기"
            },
            {
                english: "Reverse middle section turning punch",
                korean: "jungdan bandae dollyŏ ap jumŏk jirŭgi",
                hangul: "중단 반대 돌려 앞 주먹 지르기"
            },
            {
                english: "Reverse middle section uppercut strike",
                korean: "jungdan bandae dwijibŏ jirŭgi",
                hangul: "중단 반대 뒤집어 지르기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 8,
        blocks: [
            {
                english: "High section X-forearm block",
                korean: "sangdan gyoch'a p'almok makki",
                hangul: "상단 교차 팔목 막기"
            },
            {
                english: "High section knifehand block",
                korean: "sangdan sonk'al makki",
                hangul: "상단 손칼 막기"
            },
            {
                english: "Low section X-forearm block",
                korean: "hadan gyoch'a p'almok makki",
                hangul: "하단 교차 팔목 막기"
            },
            {
                english: "Middle section forearm block",
                korean: "jungdan p'almok makki",
                hangul: "중단 팔목 막기"
            },
            {
                english: "Middle section twin palm-heel pushing block",
                korean: "jungdan ssang sonbadak mirŏ makki",
                hangul: "중단 쌍 손바닥 밀어 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Inside-to-outside crescent kick",
                korean: "ap yŏk dollyŏ ch'agi",
                hangul: "앞 역 돌려 차기"
            },
            {
                english: "Low section kneeling spin side thrust kick",
                korean: "hadan murŭp kkulhŏ dwidollyŏ yŏp ch'agi",
                hangul: "하단 무릎 꿇어 뒤돌려 옆 차기"
            },
            {
                english: "Low section twisting kick",
                korean: "hadan bit'ŭllyŏ ch'agi",
                hangul: "하단 비틀려 차기"
            },
            {
                english: "Roundhouse kick",
                korean: "dollyŏ ch'agi",
                hangul: "돌려 차기"
            },
            {
                english: "Spinning side thrust kick",
                korean: "dwidollyŏ yŏp ch'agi",
                hangul: "뒤돌려 옆 차기"
            }
        ],
        stances: [
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Kneeling front stance",
                korean: "murŭp kkulhŏ sŏgi",
                hangul: "무릎 꿇어 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward fixed stance",
                korean: "oenbal gojŏng sŏgi",
                hangul: "왼발 고정 서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward fixed stance",
                korean: "orŭnbal gojŏng sŏgi",
                hangul: "오른발 고정 서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "High section front punch",
                korean: "sangdan ap jumŏk jirŭgi",
                hangul: "상단 앞 주먹 지르기"
            },
            {
                english: "High section outward knifehand strike",
                korean: "sangdan bakkŭro sonk'al ddaerigi",
                hangul: "상단 밖으로 손칼 때리기"
            },
            {
                english: "High section palm-heel strike",
                korean: "sangdan sonbadak jirŭgi",
                hangul: "상단 손바닥 지르기"
            },
            {
                english: "Reverse high section front elbow strike",
                korean: "sangdan bandae ap p'alkkumch'i jirŭgi",
                hangul: "상단 반대 앞 팔꿈치 지르기"
            },
            {
                english: "Reverse middle section front punch",
                korean: "jungdan bandae ap jumŏk jirŭgi",
                hangul: "중단 반대 앞 주먹 지르기"
            },
            {
                english: "Reverse uppercut strike",
                korean: "bandae dwijibŏ ddaerigi",
                hangul: "반대 뒤집어 때리기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 7,
        blocks: [
            {
                english: "Low section Kyuki-Do block",
                korean: "hadan gyŏkkido makki",
                hangul: "하단 격기도 막기"
            },
            {
                english: "Low section forearm block",
                korean: "hadan p'almok makki",
                hangul: "하단 팔목 막기"
            },
            {
                english: "Middle section double knifehand block",
                korean: "jungdan dul sonk'al makki",
                hangul: "중단 둘 손칼 막기"
            },
            {
                english: "Middle section knifehand block",
                korean: "jungdan sonk'al makki",
                hangul: "중단 손칼 막기"
            },
            {
                english: "Modified box block",
                korean: "byŏn'gyŏng ssang son p'almok makki",
                hangul: "변경 쌍 손 팔목 막기"
            },
            {
                english: "Reverse middle section inside forearm block",
                korean: "jungdan bandae an p'almok makki",
                hangul: "중단 반대 안 팔목 막기"
            },
            {
                english: "Wedging knifehand block",
                korean: "haech'yŏ sonk'al makki",
                hangul: "해쳐 손칼 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Front snap kick",
                korean: "ap ch'agi",
                hangul: "앞 차기"
            },
            {
                english: "Roundhouse kick",
                korean: "dollyŏ ch'agi",
                hangul: "돌려 차기"
            },
            {
                english: "Step-behind side thrust kick",
                korean: "baldwiro olmkyŏ yŏp ch'agi",
                hangul: "발뒤로 옮겨 옆 차기"
            }
        ],
        stances: [
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "Downward elbow strike",
                korean: "naeryŏ p'alkkumch'i ddaerigi",
                hangul: "내려 팔꿈치 때리기"
            },
            {
                english: "Middle section front punch",
                korean: "jungdan ap jumŏk jirŭgi",
                hangul: "중단 앞 주먹 지르기"
            },
            {
                english: "Middle section knee strike",
                korean: "jungdan murŭp jirŭgi",
                hangul: "중단 무릎 지르기"
            },
            {
                english: "Middle section side punch",
                korean: "jungdan yŏp jumŏk jirŭgi",
                hangul: "중단 옆 주먹 지르기"
            },
            {
                english: "Reverse high section downward hammerfist strike",
                korean: "sangdan bandae naeryŏ mejumŏk ddaerigi",
                hangul: "상단 반대 내려 메주먹 때리기"
            },
            {
                english: "Reverse high section inward knifehand strike",
                korean: "sangdan bandae anŭro sonk'al ddaerigi",
                hangul: "상단 반대 안으로 손칼 때리기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 6,
        blocks: [
            {
                english: "Deflection block",
                korean: "bansa jagyong makki",
                hangul: "반사 작용 막기"
            },
            {
                english: "Face block",
                korean: "ŏlgul makki",
                hangul: "얼굴 막기"
            },
            {
                english: "Low section X-forearm block",
                korean: "hadan gyoch'a p'almok makki",
                hangul: "하단 교차 팔목 막기"
            },
            {
                english: "Middle section augmented forearm block",
                korean: "jungdan gŏdŭrŏ makki",
                hangul: "중단 거들어 막기"
            },
            {
                english: "Middle section forearm block",
                korean: "jungdan p'almok makki",
                hangul: "중단 팔목 막기"
            },
            {
                english: "Middle section palm-heel pushing block",
                korean: "jungdan sonbadak mirŏ makki",
                hangul: "중단 손바닥 밀어 막기"
            },
            {
                english: "Outside forearm block",
                korean: "bakkat p'almok makki",
                hangul: "밖앗 팔목 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Roundhouse kick",
                korean: "dollyŏ ch'agi",
                hangul: "돌려 차기"
            },
            {
                english: "Step-behind side thrust kick",
                korean: "baldwiro olmkyŏ yŏp ch'agi",
                hangul: "발뒤로 옮겨 옆 차기"
            }
        ],
        stances: [
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "High section downward hammerfist strike",
                korean: "sangdan naeryŏ mejumŏk ddaerigi",
                hangul: "상단 내려 메주먹 때리기"
            },
            {
                english: "Middle section augmented side elbow strike",
                korean: "jungdan yŏp p'alkkumch'i ddaerigi",
                hangul: "중단 옆 팔꿈치 때리기"
            },
            {
                english: "Middle section front punch",
                korean: "jungdan ap jumŏk jirŭgi",
                hangul: "중단 앞 주먹 지르기"
            },
            {
                english: "Reverse high section arc-hand strike",
                korean: "sangdan bandae bandalson jirŭgi",
                hangul: "상단 반대 반달손 지르기"
            },
            {
                english: "Reverse high section palm-heel strike",
                korean: "sangdan bandae sonbadak jirŭgi",
                hangul: "상단 반대 손바닥 지르기"
            },
            {
                english: "Reverse high section spearhand strike",
                korean: "sangdan bandae son'kkŭt jirŭgi",
                hangul: "상단 반대 손끝 지르기"
            },
            {
                english: "Reverse low section palm-heel strike",
                korean: "hadan bandae sonbadak jirŭgi",
                hangul: "하단 반대 손바닥 지르기"
            }
        ],
        throws: [
            {
                english: "Major hip throw",
                korean: "o-goshi",
                hangul: "大腰"
            }
        ],
        traps: [
            {
                english: "Middle section corkscrew trap, in to out",
                korean: "gama do? olgami",
                hangul: "감아 도? 올가미"
            }
        ],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 5,
        blocks: [
            {
                english: "High section knifehand block",
                korean: "sangdan sonk'al makki",
                hangul: "상단 손칼 막기"
            },
            {
                english: "Knifehand box block",
                korean: "ssang son sonk'al makki",
                hangul: "쌍 손 손칼 막기"
            },
            {
                english: "Low section knifehand block",
                korean: "hadan sonk'al makki",
                hangul: "하단 손칼 막기"
            },
            {
                english: "Middle section Kyuki-Do block",
                korean: "jungdan gyŏkkido makki",
                hangul: "중단 격기도 막기"
            },
            {
                english: "Middle section double knifehand block",
                korean: "jungdan dul sonk'al makki",
                hangul: "중단 둘 손칼 막기"
            },
            {
                english: "Middle section outward ridgehand block",
                korean: "jungdan bakkŭro yŏksonk'al makki",
                hangul: "중단 밖으로 역손칼 막기"
            },
            {
                english: "Palm-heel face block",
                korean: "sonbadak ŏlgul makki",
                hangul: "손바닥 얼굴 막기"
            },
            {
                english: "Reverse palm-heel face block",
                korean: "bandae sonbadak ŏlgul makki",
                hangul: "반대 손바닥 얼굴 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        escapes: [
            {
                english: "Wrist-grab escape",
                korean: "sonmok japki p'ulgi",
                hangul: "손목 잡기 풀기"
            }
        ],
        kicks: [
            {
                english: "Front snap kick",
                korean: "ap ch'agi",
                hangul: "앞 차기"
            },
            {
                english: "Rear leg side thrust kick",
                korean: "dwitpal yŏp ch'agi",
                hangul: "뒷발 옆 차기"
            },
            {
                english: "Roundhouse kick",
                korean: "dollyŏ ch'agi",
                hangul: "돌려 차기"
            },
            {
                english: "Side thrust kick",
                korean: "yŏp ch'agi",
                hangul: "옆 차기"
            },
            {
                english: "Stomping kick",
                korean: "balba ch'agi",
                hangul: "밟아 차기"
            }
        ],
        stances: [
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward cat stance",
                korean: "oenbal goyangi sŏgi",
                hangul: "왼발 고양이 서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "High section augmented rolling vertical punch",
                korean: "sangdan sewŏ jumŏk jirŭgi",
                hangul: "상단 세워 주먹 지르기"
            },
            {
                english: "High section downward backfist strike",
                korean: "sangdan naeryŏ dŭngjumŏk ddaerigi",
                hangul: "상단 내려 등주먹 때리기"
            },
            {
                english: "Low section palm-heel strike",
                korean: "hadan sonbadak jirŭgi",
                hangul: "하단 손바닥 지르기"
            },
            {
                english: "Middle section augmented vertical spearhand strike",
                korean: "jungdan sewŏ son'kkŭt jirŭgi",
                hangul: "중단 세워 손끝 지르기"
            },
            {
                english: "Middle section vertical punch",
                korean: "jungdan sewŏ jumŏk jirŭgi",
                hangul: "중단 세워 주먹 지르기"
            },
            {
                english: "Reverse downward palm-heel strike",
                korean: "bandae naeryŏ sonbadak jirŭgi",
                hangul: "반대 내려 손바닥 지르기"
            },
            {
                english: "Reverse high section inward knifehand strike",
                korean: "sangdan bandae anŭro sonk'al ddaerigi",
                hangul: "상단 반대 안으로 손칼 때리기"
            },
            {
                english: "Reverse high section spearhand strike",
                korean: "sangdan bandae son'kkŭt jirŭgi",
                hangul: "상단 반대 손끝 지르기"
            },
            {
                english: "Reverse middle section vertical punch",
                korean: "jungdan bandae sewŏ jumŏk jirŭgi",
                hangul: "중단 반대 세워 주먹 지르기"
            }
        ],
        throws: [
            {
                english: "One-armed shoulder throw",
                korean: "ippon seoi-nage",
                hangul: "一本 背負投"
            },
            {
                english: "Two-handed shoulder throw",
                korean: "morote seoi-nage",
                hangul: "諸手 背負投"
            }
        ],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
    },
    {
        id: 4,
        blocks: [
            {
                english: "Guarding block",
                korean: "daebi makki",
                hangul: "대비 막기"
            },
            {
                english: "High section knifehand block",
                korean: "sangdan sonk'al makki",
                hangul: "상단 손칼 막기"
            },
            {
                english: "Middle section double knifehand block",
                korean: "jungdan dul sonk'al makki",
                hangul: "중단 둘 손칼 막기"
            },
            {
                english: "Middle section knifehand block",
                korean: "jungdan sonk'al makki",
                hangul: "중단 손칼 막기"
            },
            {
                english: "Modified Kyuki-Do block",
                korean: "byŏn'gyŏng gyŏgido makki",
                hangul: "변경 겨기도 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        chokes: [
            {
                english: "Normal cross choke",
                korean: "nami jūji-jime",
                hangul: "並十字絞"
            }
        ],
        kicks: [
            {
                english: "Connecting front snap kick",
                korean: "iŏ ap ch'agi",
                hangul: "이어 앞 차기"
            },
            {
                english: "Connecting side thrust kick",
                korean: "iŏ yŏp ch'agi",
                hangul: "이어 옆 차기"
            },
            {
                english: "Roundhouse kick",
                korean: "dollyŏ ch'agi",
                hangul: "돌려 차기"
            },
            {
                english: "Spinning hook kick",
                korean: "dwidollyŏ gŏlch'yŏ ch'agi",
                hangul: "뒤돌려 걸쳐 차기"
            }
        ],
        rolls: [
            {
                english: "Forward roll",
                korean: "zenpo kaiten",
                hangul: "前方回転"
            }
        ],
        stances: [
            {
                english: "X-stance",
                korean: "gyoch'a sŏgi",
                hangul: "교차 서기"
            },
            {
                english: "Left classical Kyuki-Do stance",
                korean: "oenbal gyŏkkido sŏgi",
                hangul: "왼발 격기도 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            },
            {
                english: "Right-foot-forward kneeling front stance",
                korean: "orŭnbal murŭp kkulhŏ sŏgi",
                hangul: "오른발 무릎 꿇어 서기"
            }
        ],
        strikes: [
            {
                english: "High section inward knifehand strike",
                korean: "sangdan anŭro sonk'al ddaerigi",
                hangul: "상단 안으로 손칼 때리기"
            },
            {
                english: "High section outward knifehand strike",
                korean: "sangdan bakkŭro sonk'al ddaerigi",
                hangul: "상단 밖으로 손칼 때리기"
            },
            {
                english: "High section vertical backfist strike",
                korean: "sangdan sewŏ dŭngjumŏk ddaerigi",
                hangul: "상단 세워 등주먹 때리기"
            },
            {
                english: "Middle section front punch",
                korean: "jungdan ap jumŏk jirŭgi",
                hangul: "중단 앞 주먹 지르기"
            },
            {
                english: "Middle section twin palm-heel strike",
                korean: "jungdan ssang sonbadak jirŭgi",
                hangul: "중단 쌍 손바닥 지르기"
            },
            {
                english: "Reverse high section arc-hand strike",
                korean: "sangdan bandae bandalson jirŭgi",
                hangul: "상단 반대 반달손 지르기"
            },
            {
                english: "Reverse upward ridgehand strike",
                korean: "bandae wi yŏk sonk'al ddaerigi",
                hangul: "반대 위 역 손칼 때리기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        escapes: [],
    },
    {
        id: 2,
        armLocks: [
            {
                english: "Arm pull",
                korean: "dan-gigi",
                hangul: ""
            },
            {
                english: "Arm wrench",
                korean: "cho-igi",
                hangul: ""
            }
        ],
        blocks: [
            {
                english: "High section knifehand block",
                korean: "sangdan sonk'al makki",
                hangul: "상단 손칼 막기"
            },
            {
                english: "Knifehand X-block",
                korean: "sonk'al gyoch'a makki",
                hangul: "손칼 교차 막기"
            },
            {
                english: "Middle section knifehand block",
                korean: "jungdan sonk'al makki",
                hangul: "중단 손칼 막기"
            },
            {
                english: "Palm-heel face block",
                korean: "sonbadak ŏlgul makki",
                hangul: "손바닥 얼굴 막기"
            },
            {
                english: "Reverse middle section knifehand block",
                korean: "jungdan bandae sonk'al makki",
                hangul: "중단 반대 손칼 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Drop spinning hook kick",
                korean: "murŭp kkulhŏ dwidollyŏ gŏlch'yŏ ch'agi",
                hangul: "무릎 꿇어 뒤돌려 걸쳐 차기"
            },
            {
                english: "Low section kneeling roundhouse kick",
                korean: "hadan murŭp kkulhŏ dollyŏ ch'agi",
                hangul: "하단 무릎 꿇어 돌려 차기"
            },
            {
                english: "Low section rear leg side thrust kick",
                korean: "hadan dwitpal yŏp ch'agi",
                hangul: "하단 뒷발 옆 차기"
            },
            {
                english: "Low section roundhouse kick",
                korean: "hadan dollyŏ ch'agi",
                hangul: "하단 돌려 차기"
            },
            {
                english: "Rear leg hook kick",
                korean: "dwitpal gŏlch'yŏ ch'agi",
                hangul: "뒷발 걸쳐 차기"
            }
        ],
        stances: [
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Left-foot-forward kneeling front stance",
                korean: "oenbal murŭp kkulhŏ sŏgi",
                hangul: "왼발 무릎 꿇어 서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            },
            {
                english: "Right-foot-forward kneeling front stance",
                korean: "orŭnbal murŭp kkulhŏ sŏgi",
                hangul: "오른발 무릎 꿇어 서기"
            }
        ],
        strikes: [
            {
                english: "High section front elbow strike",
                korean: "sangdan ap p'alkkumch'i ddaerigi",
                hangul: "상단 앞 팔꿈치 때리기"
            },
            {
                english: "High section palm-heel strike",
                korean: "sangdan sonbadak jirŭgi",
                hangul: "상단 손바닥 지르기"
            },
            {
                english: "High section twin thumb strike",
                korean: "sangdan ssang ŏmjison'garak jirŭgi",
                hangul: "상단 쌍 엄지손가락 지르기"
            },
            {
                english: "High section uppercut",
                korean: "sangdan dwijibŏ jirŭgi",
                hangul: "상단 뒤집어 지르기"
            },
            {
                english: "Knee strike",
                korean: "murŭp ch'agi",
                hangul: "무릎 차기"
            },
            {
                english: "Reverse high section palm-heel strike",
                korean: "sangdan bandae sonbadak jirŭgi",
                hangul: "상단 반대 손바닥 지르기"
            },
            {
                english: "Reverse high section ridgehand strike",
                korean: "sangdan bandae yŏksonk'al ddaerigi",
                hangul: "상단 반대 역손칼 때리기"
            }
        ],
        throws: [
            {
                english: "Body drop throw",
                korean: "tai otoshi",
                hangul: "体落"
            },
            {
                english: "Propping ankle throw",
                korean: "sasae tsurikomi ashi",
                hangul: "支釣込足"
            },
            {
                english: "Sliding ankle throw",
                korean: "okuri-ashi harai",
                hangul: "送足払"
            }
        ],
        traps: [
            {
                english: "X-grab trap",
                korean: "gyoch'a olgami",
                hangul: "교차 올가미"
            }
        ],
        rolls: [],
        chokes: [],
        escapes: [],
    },
    {
        id: 1,
        blocks: [
            {
                english: "Middle section inside forearm block",
                korean: "jungdan an p'almok makki",
                hangul: "중단 안 팔목 막기"
            },
            {
                english: "Middle section knifehand block",
                korean: "jungdan sonk'al makki",
                hangul: "중단 손칼 막기"
            },
            {
                english: "Middle section twin palm-heel pushing block",
                korean: "jungdan ssang sonbadak mirŏ makki",
                hangul: "중단 쌍 손바닥 밀어 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Front snap kick",
                korean: "ap ch'agi",
                hangul: "앞 차기"
            },
            {
                english: "Low section rear leg side thrust kick",
                korean: "hadan dwitpal yŏp ch'agi",
                hangul: "하단 뒷발 옆 차기"
            },
            {
                english: "Outside-to-inside crescent kick",
                korean: "ap dollyŏ ch'agi",
                hangul: "앞 돌려 차기"
            },
            {
                english: "Tornado kick",
                korean: "t'oneido ch'agi",
                hangul: "토네이도 차기"
            }
        ],
        stances: [
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Ready position",
                korean: "junbi sŏgi",
                hangul: "준비 서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            }
        ],
        strikes: [
            {
                english: "High section downward backfist strike",
                korean: "sangdan naeryŏ dŭngjumŏk ddaerigi",
                hangul: "상단 내려 등주먹 때리기"
            },
            {
                english: "High section front elbow strike",
                korean: "sangdan ap p'alkkumch'i ddaerigi",
                hangul: "상단 앞 팔꿈치 때리기"
            },
            {
                english: "High section inward twin knifehand strike",
                korean: "sangdan anŭro ssang sonk'al ddaerigi",
                hangul: "상단 안으로 쌍 손칼 때리기"
            },
            {
                english: "High section outward knifehand strike",
                korean: "sangdan bakkŭro sonk'al ddaerigi",
                hangul: "상단 밖으로 손칼 때리기"
            },
            {
                english: "Middle section side punch",
                korean: "jungdan yŏp jumŏk jirŭgi",
                hangul: "중단 옆 주먹 지르기"
            },
            {
                english: "Reverse high section four-knuckle strike",
                korean: "sangdan bandae p'yŏnjumŏk jirŭgi",
                hangul: "상단 반대 편주먹 지르기"
            },
            {
                english: "Reverse middle section front punch",
                korean: "jungdan bandae ap jumŏk jirŭgi",
                hangul: "중단 반대 앞 주먹 지르기"
            },
            {
                english: "Reverse middle section turning punch",
                korean: "jungdan bandae dollyŏ ap jumŏk jirŭgi",
                hangul: "중단 반대 돌려 앞 주먹 지르기"
            }
        ],
        throws: [],
        traps: [],
        armLocks: [],
        rolls: [],
        chokes: [],
        escapes: [],
    }
];


interface StaffTechnique {
    english: string;
    korean: string;
    hangul: string;
}

interface StaffFormTechniques {
    id: number;
    blocks: StaffTechnique[];
    breathings: StaffTechnique[];
    kicks: StaffTechnique[];
    stances: StaffTechnique[];
    staffBlocks: StaffTechnique[];
    staffManeuvers: StaffTechnique[];
    staffStrikes: StaffTechnique[];
    staffSweeps: StaffTechnique[];
    weaponCriteria: StaffTechnique[];
}

export const staffFormTech: StaffFormTechniques[] = [
    {
        id: 3,
        blocks: [
            {
                english: "Reverse high section knifehand block",
                korean: "sangdan bandae sonk'al makki",
                hangul: "상단 반대 손칼 막기"
            }
        ],
        breathings: [
            {
                english: "Kihap",
                korean: "gihap",
                hangul: "기합"
            }
        ],
        kicks: [
            {
                english: "Connecting front snap kick",
                korean: "iŏ ap ch'agi",
                hangul: "이어 앞 차기"
            }
        ],
        staffBlocks: [
            {
                english: "Classical box block",
                korean: "",
                hangul: ""
            },
            {
                english: "High section double horizontal block",
                korean: "",
                hangul: ""
            },
            {
                english: "Low section block",
                korean: "",
                hangul: ""
            },
            {
                english: "Slow pushing twin high section horizontal block",
                korean: "",
                hangul: ""
            },
            {
                english: "Twin low section horizontal block",
                korean: "",
                hangul: ""
            }
        ],
        staffManeuvers: [
            {
                english: "Figure eight",
                korean: "",
                hangul: ""
            },
            {
                english: "Overhead spin",
                korean: "",
                hangul: ""
            }
        ],
        stances: [
            {
                english: "X-stance",
                korean: "gyoch'a sŏgi",
                hangul: "교차 서기"
            },
            {
                english: "Closed stance",
                korean: "moasŏgi",
                hangul: "모아서기"
            },
            {
                english: "Horse stance",
                korean: "gima sŏgi",
                hangul: "기마 서기"
            },
            {
                english: "Left-foot-forward back stance",
                korean: "oenbal dwissŏgi",
                hangul: "왼발 뒷서기"
            },
            {
                english: "Left-foot-forward front stance",
                korean: "oenbal apsŏgi",
                hangul: "왼발 앞서기"
            },
            {
                english: "Left-foot-forward kneeling front stance",
                korean: "oenbal murŭp kkulhŏ sŏgi",
                hangul: "왼발 무릎 꿇어 서기"
            },
            {
                english: "Left-foot-forward transitional stance",
                korean: "",
                hangul: ""
            },
            {
                english: "One-legged stance",
                korean: "han bal sŏgi",
                hangul: "한 발 서기"
            },
            {
                english: "Parallel stance",
                korean: "naranhi sŏgi",
                hangul: "나란히 서기"
            },
            {
                english: "Right-foot-forward back stance",
                korean: "orŭnbal dwissŏgi",
                hangul: "오른발 뒷서기"
            },
            {
                english: "Right-foot-forward front stance",
                korean: "orŭnbal apsŏgi",
                hangul: "오른발 앞서기"
            },
            {
                english: "Right-foot-forward transitional stance",
                korean: "",
                hangul: ""
            }
        ],
        staffStrikes: [
            {
                english: "Downward strike",
                korean: "",
                hangul: ""
            },
            {
                english: "High section downward strike",
                korean: "",
                hangul: ""
            },
            {
                english: "High section strike",
                korean: "",
                hangul: ""
            },
            {
                english: "Low section strike",
                korean: "",
                hangul: ""
            },
            {
                english: "Middle section poke",
                korean: "",
                hangul: ""
            },
            {
                english: "Middle section strike",
                korean: "",
                hangul: ""
            },
            {
                english: "Overhead strike",
                korean: "",
                hangul: ""
            },
            {
                english: "Reverse high section poke",
                korean: "",
                hangul: ""
            },
            {
                english: "Reverse high section strike",
                korean: "",
                hangul: ""
            },
            {
                english: "Reverse middle section poke",
                korean: "",
                hangul: ""
            },
            {
                english: "Side poke",
                korean: "",
                hangul: ""
            },
            {
                english: "Upward strike",
                korean: "",
                hangul: ""
            }
        ],
        staffSweeps: [
            {
                english: "Low section foot sweep",
                korean: "",
                hangul: ""
            }
        ],
        weaponCriteria: [
            {
                english: "Body Conditioning",
                korean: "",
                hangul: ""
            },
            {
                english: "Manipulation",
                korean: "",
                hangul: ""
            },
            {
                english: "Theory",
                korean: "",
                hangul: ""
            }
        ]
    }
];