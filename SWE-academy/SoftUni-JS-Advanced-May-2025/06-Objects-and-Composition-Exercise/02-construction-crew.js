function constructionCrew(workerObj) {
    if (workerObj.dizziness == false) {
        return workerObj;
    }

    workerObj.levelOfHydrated += workerObj.weight * 0.1 * workerObj.experience;
    workerObj.dizziness = false;
    return workerObj;
}

constructionCrew({
    weight: 80,
    experience: 1,
    levelOfHydrated: 0,
    dizziness: true
});
constructionCrew({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});
constructionCrew({
    weight: 95,
    experience: 3,
    levelOfHydrated: 0,
    dizziness: false
});