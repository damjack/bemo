BEMO 2

••• STORYBOOK •••
  - SPECIFICARE LA SEQUENZA E GLI STEP DA COMPIERE PER INIZIALIZZARE BEMO2
    - COLORI
    - ATTIVAZIONI VARIE (flex, grid, button, etc...)
    - FONT SIZE e LINE HEIGHT
    - FONT FAMILY (typefaces)
    - IMPOSTAZIONI GRIGLIA (flex e/o grid)
    - FARE RIFERIMENTO a bemo-variables.sass

  - NAV
    - Aggiungere STORYBOOK per NAV con esempi colore
    - farei esempio di uso del default e magari una versione orizzontale
    - CAPIRE SE SPOSTARE ASIDE (CANVAS) + TOGGLE MOBILE dentro NAV

  - MARGIN
    - .margin|padding--all-size VS .margin|padding--direction-size  => specificare l'uso
    - SPIEGARE CHE MIXINS SI POSSONO CONFIGURARE ANCHE CON  margini negativi

  - VISIBILITY
      da definire

  - BACKGROUND 
    - <section class="background">deafult</section> => TOGLIERE ESEMPIO

  - COLORS
    - SPIEGARE SU STORYBOOK CHE ESISTE MAPPA COLORI
    - CAMBIARE NOME COLORI CON NOMI ASTRATTI (primary, alert, success, etc...)
    - specificherei la creazione e l'uso con altre utilities o blocks

  - BUTTONS
    - button--red--rounded VS button--red--rounded--outline => differenze?
    - TIPI DI NOMI:
      - button
      - button--small
      - button--rounded -> NON DEVE PIU ESISTERE
      - button--outline
      - button--danger
      - button--rounded-danger
      - button--outline-danger
      - button--rounded-outline-danger
    - SE BUTTON ROUNDED ALLORA SOLO ROUNDED
    - MODIFICARE VARIABILE e non USARE DA EMPTY

  - FLAG
    - il default forse é un po' indefinito => aggiungere un bg chiaro o un bordo?
    - versione con bg colorato => esempio
    - forse l'hr crea confusione, sembra un elemento del blocco

  - FORM
    - metterei un esempio corrispondende a quello mostrato

  - PROGRESS BAR
    - progress-bar__line => border radius?
    - AGGIUNGERE VARIABILE PER DEFINIRE BORDER RADIUS DELLA BARRA INTERNA

  - HELPERS
    - @transition => nell'esempio c'è un refuso

  - SPECIFICHE DI UTILIZZO
    - spiegherei come attivare eventuali funzioni, come si creano aspetti personalizzati, come sovrascrivere
    - suddiviederei gli argomenti allo stesso modo delle cartelle (es. toglierei la sezione LAYOUT  e metterei flex e grid in UTILITIES)
    - come si getiscono e utilizzano variabili e utilities


••• ESEMPI MANCANTI SU STORYBOOK •••

    - BLOCKS
        - canvsas
        - dialog
        - empty
        - formatted content
        - hero
        - input
        - nav
        - or
        - page
        - table

    - UTILITIES
        - align
        - angle
        - center
        - font-size
        - image
        - label
        - list
        - space
        - wrap


••• FILES •••

    - VARIABLES
        .empty => i buttons fanno riferimento alla variabile $border-radius in questo sass

    - UTILITIES
        - background => nel file sass commentare l'esempio



