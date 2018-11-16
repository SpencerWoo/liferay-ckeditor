﻿/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.plugins.setLang( 'a11yhelp', 'eu', {
	title: 'Erabilerraztasunaren argibideak',
	contents: 'Laguntzaren edukiak. Elkarrizketa-koadro hau ixteko sakatu ESC.',
	legend: [
		{
		name: 'Orokorra',
		items: [
			{
			name: 'Editorearen tresna-barra',
			legend: 'Sakatu ${toolbarFocus} tresna-barrara nabigatzeko. Tresna-barrako aurreko eta hurrengo taldera joateko erabili TAB eta MAIUS+TAB. Tresna-barrako aurreko eta hurrengo botoira joateko erabili ESKUIN-GEZIA eta EZKER-GEZIA. Sakatu ZURIUNEA edo SARTU tresna-barrako botoia aktibatzeko.'
		},

			{
			name: 'Editorearen elkarrizketa-koadroa',
			legend:
				'Elkarrizketa-koadro baten barruan sakatu TAB hurrengo elementura nabigatzeko, sakatu MAIUS+TAB aurreko elementura joateko, sakatu SARTU elkarrizketa-koadroa bidaltzeko eta sakatu ESC uzteko. Elkarrizketa-koadro batek hainbat fitxa dituenean, ALT+F10 erabiliz irits daiteke fitxen zerrendara, edo TAB erabiliz. Fokoa fitxen zerrendak duenean, aurreko eta hurrengo fitxetara joateko erabili EZKER-GEZIA eta ESKUIN-GEZIA.'
		},

			{
			name: 'Editorearen testuinguru-menua',
			legend: 'Sakatu ${contextMenu} edo APLIKAZIO TEKLA testuinguru-menua irekitzeko. Menuko hurrengo aukerara joateko erabili TAB edo BEHERA GEZIA. Aurreko aukerara nabigatzeko erabili MAIUS+TAB edo GORA GEZIA. Sakatu ZURIUNEA edo SARTU menuko aukera hautatzeko. Ireki uneko aukeraren azpi-menua ZURIUNEA edo SARTU edo ESKUIN-GEZIA erabiliz. Menuko aukera gurasora itzultzeko erabili ESC edo EZKER-GEZIA. Testuinguru-menua ixteko sakatu ESC.'
		},

			{
			name: 'Editorearen zerrenda-koadroa',
			legend: 'Zerrenda-koadro baten barruan, zerrendako hurrengo elementura joateko erabili TAB edo BEHERA GEZIA. Zerrendako aurreko elementura nabigatzeko MAIUS+TAB edo GORA GEZIA. Sakatu ZURIUNEA edo SARTU zerrendako aukera hautatzeko. Sakatu ESC zerrenda-koadroa ixteko.'
		},

			{
			name: 'Editorearen elementuaren bide-barra',
			legend: 'Sakatu ${elementsPathFocus} elementuaren bide-barrara nabigatzeko. Hurrengo elementuaren botoira joateko erabili TAB edo ESKUIN-GEZIA. Aurreko botoira joateko aldiz erabili MAIUS+TAB edo EZKER-GEZIA. Elementua editorean hautatzeko sakatu ZURIUNEA edo SARTU.'
		}
		]
	},
		{
		name: 'Komandoak',
		items: [
			{
			name: 'Desegin komandoa',
			legend: 'Sakatu ${undo}'
		},
			{
			name: 'Berregin komandoa',
			legend: 'Sakatu ${redo}'
		},
			{
			name: 'Lodia komandoa',
			legend: 'Sakatu ${bold}'
		},
			{
			name: 'Etzana komandoa',
			legend: 'Sakatu ${italic}'
		},
			{
			name: 'Azpimarratu komandoa',
			legend: 'Sakatu ${underline}'
		},
			{
			name: 'Esteka komandoa',
			legend: 'Sakatu ${link}'
		},
			{
			name: 'Tolestu tresna-barra komandoa',
			legend: 'Sakatu ${toolbarCollapse}'
		},
			{
			name: ' Access previous focus space command', // MISSING
			legend: 'Press ${accessPreviousSpace} to access the closest unreachable focus space before the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: ' Access next focus space command', // MISSING
			legend: 'Press ${accessNextSpace} to access the closest unreachable focus space after the caret, for example: two adjacent HR elements. Repeat the key combination to reach distant focus spaces.' // MISSING
		},
			{
			name: 'Erabilerraztasunaren laguntza',
			legend: 'Sakatu ${a11yHelp}'
		}
		]
	}
	],
	tab: 'Tabuladorea',
	pause: 'Pausatu',
	capslock: 'Blok Maius',
	escape: 'Ihes',
	pageUp: 'Page Up', // MISSING
	pageDown: 'Page Down', // MISSING
	leftArrow: 'Ezker-gezia',
	upArrow: 'Gora gezia',
	rightArrow: 'Eskuin-gezia',
	downArrow: 'Behera gezia',
	insert: 'Txertatu',
	leftWindowKey: 'Ezkerreko Windows tekla',
	rightWindowKey: 'Eskuineko Windows tekla',
	selectKey: 'Hautatu tekla',
	numpad0: 'Zenbakizko teklatua 0',
	numpad1: 'Zenbakizko teklatua 1',
	numpad2: 'Zenbakizko teklatua 2',
	numpad3: 'Zenbakizko teklatua 3',
	numpad4: 'Zenbakizko teklatua 4',
	numpad5: 'Zenbakizko teklatua 5',
	numpad6: 'Zenbakizko teklatua 6',
	numpad7: 'Zenbakizko teklatua 7',
	numpad8: 'Zenbakizko teklatua 8',
	numpad9: 'Zenbakizko teklatua 9',
	multiply: 'Biderkatu',
	add: 'Gehitu',
	subtract: 'Kendu',
	decimalPoint: 'Koma hamartarra',
	divide: 'Zatitu',
	f1: 'F1',
	f2: 'F2',
	f3: 'F3',
	f4: 'F4',
	f5: 'F5',
	f6: 'F6',
	f7: 'F7',
	f8: 'F8',
	f9: 'F9',
	f10: 'F10',
	f11: 'F11',
	f12: 'F12',
	numLock: 'Blok Zenb',
	scrollLock: 'Blok Korr',
	semiColon: 'Puntu eta koma',
	equalSign: 'Berdin zeinua',
	comma: 'Koma',
	dash: 'Marratxoa',
	period: 'Puntua',
	forwardSlash: 'Barra',
	graveAccent: 'Azentu kamutsa',
	openBracket: 'Parentesia ireki',
	backSlash: 'Alderantzizko barra',
	closeBracket: 'Itxi parentesia',
	singleQuote: 'Komatxo bakuna'
} );
