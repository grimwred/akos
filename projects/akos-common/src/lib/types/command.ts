export interface Command {
  id: number;
  type: 'displayPicture' | 'displayText' | 'hideText' | 'startScene' | 'jumpToMarker';
  displayedSections: ('body' | 'condition')[]
  condition: any;
  marker?: string;
  parameters?: {

    // Commons
    waitForPlayer?: boolean;

    // displayPicture
    picture?: string;
    fullscreen?: boolean;

    // displayText
    text?: string;

    // startScene
    sceneId?: number;

    // jumpToMarker
    toMarker?: string;
  }
}
