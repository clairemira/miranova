import {
  Table,
  TableScrollContainer,
  TableTbody,
  TableTd,
  TableTh,
  TableThead,
  TableTr,
} from "@mantine/core";
import cx from "clsx";
import classes from "./MiranovaMatrixTable.module.css";

export default function MiranovaMatrixTable() {
  return (
    <TableScrollContainer minWidth={500} type="native">
      <Table
        withTableBorder
        withColumnBorders
        style={{
          tableLayout: "fixed",
          width: "100%",
          minWidth: 1200,
          textAlign: "center",
        }}
      >
        <TableThead>
          <TableTr className={classes.root}>
            <TableTh>Degrees of Freedom</TableTh>
            <TableTh className={classes.blue}>Coherence</TableTh>
            <TableTh className={classes.green}>Entropy</TableTh>
            <TableTh className={classes.red}>Activation</TableTh>
            <TableTh className={classes.light}>Salience</TableTh>
            <TableTh className={classes.orange}>Excitation</TableTh>
            <TableTh className={classes.dark}>Modality</TableTh>
            <TableTh className={classes.yellow}>Stimulus</TableTh>
            <TableTh className={classes.magenta}>Valence</TableTh>
            <TableTh className={classes.cyan}>Resonance</TableTh>
          </TableTr>
        </TableThead>
        <TableTbody>
          <TableTr>
            <TableTh rowSpan={2}>Polarity</TableTh>
            <TableTd className={classes.blue}>Alignment</TableTd>
            <TableTd className={classes.green}>Variation</TableTd>
            <TableTd className={classes.red}>Engagement</TableTd>
            <TableTd>Amplification</TableTd>
            <TableTd className={classes.orange}>Enablement</TableTd>
            <TableTd>Differentiation</TableTd>
            <TableTd className={classes.yellow}>Perturbation</TableTd>
            <TableTd className={classes.magenta}>Attraction</TableTd>
            <TableTd className={classes.cyan}>Reinforcement</TableTd>
          </TableTr>
          <TableTr>
            <TableTd className={classes.blue}>Decoherence</TableTd>
            <TableTd className={classes.green}>Regularity</TableTd>
            <TableTd className={classes.red}>Quiescence</TableTd>
            <TableTd>Attenutation</TableTd>
            <TableTd className={classes.orange}>Suppression</TableTd>
            <TableTd>Homogenisation</TableTd>
            <TableTd className={classes.yellow}>Stability</TableTd>
            <TableTd className={classes.magenta}>Repulsion</TableTd>
            <TableTd className={classes.cyan}>Cancellation</TableTd>
          </TableTr>
          <TableTr>
            <TableTh>Operational subspace</TableTh>
            <TableTd colSpan={4}>Dynamics</TableTd>
            <TableTd className={classes.orange}>Generative Basis</TableTd>
            <TableTd colSpan={4}>Disposition</TableTd>
          </TableTr>
          {/* Distinguish */}
          <TableTr>
            <TableTh>O1</TableTh>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
          </TableTr>
          {/* Persist */}
          <TableTr>
            <TableTh>O2</TableTh>
            <TableTd></TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd></TableTd>
          </TableTr>
          {/* Constrain */}
          <TableTr>
            <TableTh>O3</TableTh>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
          </TableTr>
          {/* Disperse */}
          <TableTr>
            <TableTh>O4</TableTh>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
          </TableTr>
          {/* Mediate */}
          <TableTr>
            <TableTh>O5ᶜ</TableTh>
            <TableTd className={cx(classes.red, classes.redText)}>
              readᶜ
            </TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>
              readᶜ
            </TableTd>
          </TableTr>
          {/* Bias */}
          <TableTr>
            <TableTh>O6χ</TableTh>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gateχ
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gateχ
            </TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write
            </TableTd>
          </TableTr>
          {/* Order */}
          <TableTr>
            <TableTh>O7∘</TableTh>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write∘
            </TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.blue, classes.blueText)}>
              write∘
            </TableTd>
            <TableTd></TableTd>
            <TableTd className={cx(classes.red, classes.redText)}>read</TableTd>
            <TableTd className={cx(classes.green, classes.greenText)}>
              gate
            </TableTd>
          </TableTr>
        </TableTbody>
      </Table>
    </TableScrollContainer>
  );
}
