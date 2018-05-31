export class MockILocalizationManager {
    constructor(displayNames) {
        this.displayNames = displayNames || {};
    }
    getDisplayName(key) {
        let displayName = this.displayNames[key];
        if (displayName) {
            return displayName;
        }
        let defaultDisplayNames = MockILocalizationManager.DefaultDispalyNames;
        displayName = defaultDisplayNames[key];
        return displayName || key;
    }
}
MockILocalizationManager.DefaultDispalyNames = {
    "Visual_General": "General",
    "Visual_General_Bins": "Bins",
    "Visual_DataColors": "Data colors",
    "Visual_DataColors_Fill": "Fill",
    "Visual_XAxis": "X-Axis",
    "Visual_Show": "Show",
    "Visual_Color": "Color",
    "Visual_Title": "Title",
    "Visual_DisplayUnits": "Display Units",
    "Visual_Precision": "Decimal Places",
    "Visual_Style": "Style",
    "Visual_Style_ShowTitleOnly": "Show title only",
    "Visual_Style_ShowUnitOnly": "Show unit only",
    "Visual_Style_ShowBoth": "Show both",
    "Visual_YAxis": "Y-Axis",
    "Visual_YAxis_Start": "Start",
    "Visual_YAxis_End": "End",
    "Visual_XAxis_Start": "Start",
    "Visual_XAxis_End": "End",
    "Visual_Position": "Position",
    "Visual_Position_Left": "Left",
    "Visual_Position_Right": "Right",
    "Visual_DataLabels": "Data Labels",
    "Visual_TextSize": "Text Size",
    "Visual_Values": "Values",
    "Visual_Frequency": "Frequency",
    "Visual_Fill": "Fill"
};
//# sourceMappingURL=mockILocalizationManager.js.map