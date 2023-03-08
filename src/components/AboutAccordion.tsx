import { useState } from 'react';
import {
    Accordion,
    AccordionBody,
    AccordionHeader,
    AccordionItem
} from 'reactstrap';

export const AboutAccordion = () => {
    const [open, setOpen] = useState('1');
    const toggle = (id: string) => {
        if (open === id) {
            setOpen('');
        } else {
            setOpen(id);
        }
    };

    return (
        <div>
            <Accordion open={open}>
                <AccordionItem id='1' onClick={() => toggle('1')}>
                    <AccordionHeader targetId='1'>COMPANY MISSION</AccordionHeader>
                    <AccordionBody accordionId='1'>
                        To provide apparel that vocalizes and celebrates the joys and challenges of
                        teacher life, all while adding some humor.
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem id='2' onClick={() => toggle('2')}>
                    <AccordionHeader targetId='2'>VALUES</AccordionHeader>
                    <AccordionBody accordionId='2'>
                        <p>• Offer stylish swag that links to the latest trends and teacher slang.</p>
                        <p>• Provide a safe space for teachers to freely express themselves.</p>
                        <p>• Continue encouraging educators to offer the best educational experience for
                            their students.</p>
                    </AccordionBody>
                </AccordionItem>
                <AccordionItem id='3' onClick={() => toggle('3')}>
                    <AccordionHeader targetId='3'>TYPES OF APPAREL</AccordionHeader>
                    <AccordionBody accordionId='3'>
                        <p>We offer the following apparel for teachers:</p>
                        <p>• Shirts, Short-Sleeve, and Long-Sleeve</p>
                        <p>• Hoodies</p>
                        <p>• CDC Approved Masks</p>
                        <p>• Mugs</p>
                        <p>• Handbags</p>
                        <p>• Shirts for your child or favorite student</p>
                    </AccordionBody>
                </AccordionItem>
            </Accordion>
        </div>
    )
}