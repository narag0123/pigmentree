export default function translate(e) {
    // Category
    if (e === "single") {
        return "단품";
    }
    if (e === "bulk") {
        return "벌크";
    }
    if (e === "package") {
        return "패키지";
    }

    // Product
    if (e === "Sparkle Pearl") {
        return "스파클 펄";
    }
    if (e === "Gold Pearl") {
        return "골드 펄";
    }
    if (e === "Red Brown") {
        return "레드 브라운";
    }
    if (e === "Wine Red") {
        return "와인 레드";
    }
    if (e === "Red Pearl") {
        return "레드 펄";
    }
    if (e === "Lemon Yellow") {
        return "레몬 옐로우";
    }
    if (e === "Glossy Blue") {
        return "글로시 블루";
    }
    if (e === "Shine Blue") {
        return "샤인 블루";
    }
    if (e === "Bright Blue") {
        return "브라이트 블루";
    }
    if (e === "Luster Purple") {
        return "러스터 퍼플";
    }

    return "No Value";
}
